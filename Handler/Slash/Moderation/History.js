module.exports = {
    code: 
`
$if[$hasPerms[$authorID;manageroles]==true]
$if[$findUser[$message[1];no]!=$clientID]
$if[$isBot[$findUser[$message[1];no]]==false]
$if[$getUserVar[wc;$findUser[$message[1]]]>=1]
$interactionReply[;
    {author:$username[$authorID]:$userAvatar[$authorID]}
    {description:\`\`\`yml\n$joinsplittext[\n]\`\`\`}
    {color:ORANGE}
]
$textsplit[$getuservar[reason;$findUser[$message[1]]];~|~]
$else
$interactionReply[;
    {author:$username[$authorID]:$userAvatar[$authorID]}
    {description:$username[$findUser[$message[1]]] have zero warning!}
    {color:YELLOW}
]
$endIf
$else
$interactionReply[;
    {author:$username[$authorID]:$userAvatar[$authorID]}
    {description:You can't use this command on bots!}
    {color:YELLOW}
]
$endIf
$else
$interactionReply[;
    {author:$username[$authorID]:$userAvatar[$authorID]}
    {description:You can't use this command on me!}
    {color:YELLOW}
]
$endIf
$else
$interactionReply[;
    {author:$username[$authorID]:$userAvatar[$authorID]}
    {description:You can't use this command! You must have \`MANAGE_ROLES\`}
    {color:YELLOW}
]
$endIf
`,
    name: 'history',
    type: 'interactionCommand'
}
