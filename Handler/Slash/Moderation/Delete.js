module.exports = {
    code: 
`
$if[$hasPerms[$authorID;manageroles]==true]
$if[$findUser[$message[1];no]!=$authorID]
$if[$findUser[$message[1];no]!=$ownerID]
$if[$findUser[$message[1];no]!=$clientID]
$if[$isBot[$findUser[$message[1];no]]==false]
$if[$getUserVar[wc;$findUser[$message[1]]]>=1]
$if[$getUserVar[wc;$findUser[$message[1];no]]>=$message[2]]
$if[$checkcontains[$getuservar[reason;$findUser[$message[1];no]];($message[2]) ]==true]
$interactionReply[;
    {author:$username[$authorID]:$userAvatar[$authorID]}
    {description:Remove Warning from $username[$findUser[$message[1]]]}
    {field:ID:$message[2]:no}
    {color:ORANGE}
]
$setuservar[reason;~|~$joinsplittext[~|~];$findUser[$message[1];no]]
$edittextsplitelement[$sum[$message[2];1];#RIGHT#$message[2]#LEFT# Cleared By $usertag. ID: $authorid]
$textsplit[$getuservar[reason;$findUser[$message[1];no]];~|~]
$else
$interactionReply[;
    {author:$username[$authorID]:$userAvatar[$authorID]}
    {description:$username[$findUser[$message[1];no]]'s warning is already cleared or not existed!}
    {color:YELLOW}
]
$endIf
$else
$interactionReply[;
    {author:$username[$authorID]:$userAvatar[$authorID]}
    {description:$username[$findUser[$message[1];no]]'s warning is not existed!}
    {color:YELLOW}
]
$endIf
$else
$interactionReply[;
    {author:$username[$authorID]:$userAvatar[$authorID]}
    {description:$username[$findUser[$message[1];no]] have zero warning!}
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
    name: 'delete',
    type: 'interactionCommand'
}
