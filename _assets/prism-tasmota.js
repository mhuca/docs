Prism.languages.console = {
	'operator': /^\b(?:rule)\d?\b/im,
	'number': /\b(?<=on)\s\S{1,}#\S{1,}\s/i,
	'selector': /(?<!(power\d?))\s(?:on|do|endon|break|if|else|elseif|and|or)\b/i,
	'regex': /\b(?:backlog)\b/i,
	'comment': /\b[<].*[>]\b/,
	'important': /^\w/im,
	'deleted': /[;]\s/,
	'json': {
		pattern: /[{].*[}]/,
			alias: 'language-json',
			inside: Prism.languages.json
			}
};