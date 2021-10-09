module.exports = {
    name: "warn",
    type: 'interactionCommand',
    code: 
`
$if[$hasPerms[$authorID;manageserver]==true]
$if[$isBot[$findUser[$message[1]]]==false]
$if[$findUser[$message[1]]!=$authorID]
$if[$findUser[$message[1]]!=$ownerID]
$if[$getUserVar[wc;$findUser[$message[1]]]!=10]
$if[$charCount[$messageSlice[1]<=200]
$interactionReply[;
    {description:Warned $username[$findUser[$message[1]]]! \`Reason\`#COLON# \`$messageSlice[1]\`}
    {footer:$username[$findUser[$message[1]]] Warning Amounts#COLON# $getUserVar[wc;$findUser[$message[1]]]:$userAvatar[$findUser[$message[1]]]}
]
$setuservar[reason;$getUserVar[reason;$findUser[$message[1];no]]~|~($getUserVar[wc;$findmember[$message[1];no]]) $username[$authorID]#COLON# $messageSlice[1];$findUser[$message[1]]]
$setuservar[wc;$sum[$getUserVar[wc;$findmember[$message[1];no]];1];$findmember[$message[1];no]]
$endIf
$else
$interactionReply[;
    {description:Your reason is over \`CHARACTER 200\` limit!}

    {color:RED}
]
endIf
$else
$interactionReply[;
    {description:$username[$findUser[$message[1]]] reached limited of \`NUMBER WARNINGS\`!}

    {color:RED}
]
$endIf
$else
$interactionReply[;
    {description:You can't use this command on \`OWNER\`!}

    {color:RED}
]
$endIf
$else
$interactionReply[;
    {description:You can't use this command on \`YOURSELF\`!}

    {color:RED}
]
$endIf
$else
$interactionReply[;
    {description:Sorry! This user is \`BOT\`!}

    {color:RED}
]
$endIf
$else
$interactionReply[;
    {description:You can't run this command! You must have \`MANAGE_SERVER\`!}

    {color:RED}
]
$endIf
`
}
