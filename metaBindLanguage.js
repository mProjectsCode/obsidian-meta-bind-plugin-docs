const inputFieldTypes = [
	'toggle',
	'slider',
	'text',
	'text_area',
	'textArea',
	'select',
	'multi_select',
	'multiSelect',
	'date',
	'time',
	'date_picker',
	'datePicker',
	'number',
	'suggester',
	'editor',
	'imageSuggester',
	'progressBar',
	'inlineSelect',
	'list',
	'listSuggester',
	'inlineListSuggester',
	'inlineList',
];
const inputFieldArgumentTypes = [
	'class',
	'addLabels',
	'minValue',
	'maxValue',
	'stepSize',
	'option',
	'title',
	'optionQuery',
	'showcase',
	'onValue',
	'offValue',
	'defaultValue',
	'placeholder',
	'useLinks',
	'limit',
];
const viewFieldTypes = ['math', 'text', 'link'];
const viewFieldArgumentTypes = ['renderMarkdown', 'hidden'];

const all = [...inputFieldTypes, ...inputFieldArgumentTypes, ...viewFieldTypes, ...viewFieldArgumentTypes];

// $schema: https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json
export default {
	name: 'meta-bind',
	scopeName: 'source.meta-bind',
	patterns: [
		{
			include: '#storage',
		},
		{
			include: '#keywords',
		},
		{
			include: '#strings',
		},
	],
	repository: {
		storage: {
			patterns: [
				{
					name: 'entity.name.function.meta-bind',
					match: '\\b(VIEW|INPUT)\\b',
				},
			],
		},
		keywords: {
			patterns: [
				{
					name: 'keyword.meta-bind',
					match: `\\b(${all.join('|')})\\b`,
				},
				{
					name: 'constant.language.meta-bind',
					match: '\\(|\\)|\\[|\\]|:|#|,',
				},
			],
		},
		strings: {
			patterns: [
				{
					name: 'string.quoted.single.meta-bind',
					begin: "'",
					end: "'",
					patterns: [
						{
							name: 'constant.character.escape.meta-bind',
							match: "(\\\\\\\\)|(\\\\')",
						},
					],
				},
				{
					name: 'string.other.meta-bind',
					begin: '{',
					end: '}',
				},
			],
		},
	},
};
