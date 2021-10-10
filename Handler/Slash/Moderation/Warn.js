module.exports = {
    code: 
`
$if[$hasPerms[$authorID;manageroles]==true]
$if[$findUser[$message[1];no]!=$authorID]
$if[$findUser[$message[1];no]!=$ownerID]
$if[$findUser[$message[1];no]!=$clientID]
$if[$isBot[$findUser[$message[1];no]]==false]
$if[$getUserVar[wc;$findUser[$message[1];no]]!=10]
$setuservar[reason;$getUserVar[reason;$findUser[$message[1];no]]~|~($getUserVar[wc;$findmember[$message[1];no]]) $username[$authorID]#COLON# $messageSlice[1];$findUser[$message[1];no]]
$wait[2s]
$interactionReply[;
    {author:$username[$authorID]:$userAvatar[$authorID]}
    {description:Warned $username[$get[user]]!}
    {field:Reason:\`\`\`fix\n$messageSlice[1]\`\`\`:yes}
    {color:ORANGE}
]
$let[user;$findUser[$message[1];no]]
$setuservar[wc;$sum[$getUserVar[wc;$findmember[$message[1];no]];1];$findmember[$message[1];no]]
$else
$interactionReply[;
    {author:$username[$authorID]:$userAvatar[$authorID]}
    {description:$username[$findUser[$message[1]]] reached limited of warning!}
    {color:YELLOW}
]
$endIf
$else
$interactionReply[;
    {author:$username[$authorID]:$userAvatar[$authorID]}
    {description:You can't use this command on bots!}
    {color:YELLOW}]
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
    {description:You can't use this command on owner!}
    {color:YELLOW}
]
$endIf
$else
$interactionReply[;
    {author:$username[$authorID]:$userAvatar[$authorID]}
    {description:You can't use this command on yourself!}
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
    name: 'warn',
    type: 'interactionCommand'
}
