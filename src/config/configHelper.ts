import { type FieldArgumentValueConfig, type InputFieldArgumentConfig, InputFieldArgumentType, type ViewFieldArgumentConfig } from './static.ts';
import { InputFieldArgumentConfigs, InputFieldType, ViewFieldArgumentConfigs, ViewFieldArgumentType, ViewFieldType } from './static.ts';

class InputFieldArgumentConfigHelper {
	getAllowedInputFieldTypes(type: InputFieldArgumentType): InputFieldType[] {
		const config = InputFieldArgumentConfigs[type];
		return config.allowedFieldTypes.filter(
			x => x !== InputFieldType.DATE_PICKER_DEPRECATED && x !== InputFieldType.MULTI_SELECT_DEPRECATED && x !== InputFieldType.TEXT_AREA_DEPRECATED,
		);
	}

	doesAllowAllInputFieldTypes(type: InputFieldArgumentType): boolean {
		return this.getAllowedInputFieldTypes(type).length === 0;
	}

	generateTypeSignature(type: InputFieldArgumentType, valueConfig: FieldArgumentValueConfig[]): string {
		return generateTypeSignature(type, valueConfig);
	}
}

class InputFieldConfigHelper {
	getAllowedArguments(type: InputFieldType): InputFieldArgumentConfig[] {
		return Object.values(InputFieldArgumentConfigs).filter(x => {
			return (x.allowedFieldTypes.length === 0 || x.allowedFieldTypes.includes(type)) && x.type !== InputFieldArgumentType.INVALID;
		});
	}
}

class ViewFieldArgumentConfigHelper {
	getAllowedViewFieldTypes(type: ViewFieldArgumentType): ViewFieldType[] {
		const config = ViewFieldArgumentConfigs[type];
		return config.allowedFieldTypes;
	}

	doesAllowAllViewFieldTypes(type: ViewFieldArgumentType): boolean {
		return this.getAllowedViewFieldTypes(type).length === 0;
	}

	generateTypeSignature(type: ViewFieldArgumentType, valueConfig: FieldArgumentValueConfig[]): string {
		return generateTypeSignature(type, valueConfig);
	}
}

class ViewFieldConfigHelper {
	getAllowedArguments(type: ViewFieldType): ViewFieldArgumentConfig[] {
		return Object.values(ViewFieldArgumentConfigs).filter(x => {
			return (x.allowedFieldTypes.length === 0 || x.allowedFieldTypes.includes(type)) && x.type !== ViewFieldArgumentType.INVALID;
		});
	}
}

export class ConfigHelper {
	static inputFieldArgument: InputFieldArgumentConfigHelper = new InputFieldArgumentConfigHelper();
	static inputField: InputFieldConfigHelper = new InputFieldConfigHelper();

	static viewFieldArgument: ViewFieldArgumentConfigHelper = new ViewFieldArgumentConfigHelper();
	static viewField: ViewFieldConfigHelper = new ViewFieldConfigHelper();
}

function generateTypeSignature(type: string, valueConfig: FieldArgumentValueConfig[]): string {
	return type + generateValuesSignature(valueConfig);
}

function generateValuesSignature(valueConfig: FieldArgumentValueConfig[]): string {
	if (valueConfig.length === 0) {
		return '';
	} else {
		return `(${valueConfig.map(x => generateValueSignature(x)).join(', ')})`;
	}
}

function generateValueSignature(config: FieldArgumentValueConfig): string {
	return `${config.name}: ${config.allowed.length === 0 ? 'any' : config.allowed.join(' | ')}`;
}
