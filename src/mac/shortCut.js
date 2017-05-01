import Mac from 'mac';

const shortCutKeys = {
    '⌘': 'Command',
    '⇧': 'Shift',
    '⌥': 'Option',
    '⌃': 'Control',
    '⇪': 'CapsLock',
    'Fn': 'Fn'
}

const ProcessUserShortCutCommand = ({ inputMacShortCutKey, ...otherCommandKeys }) => {
    const getInputMacShortKey = shortCutKeys[inputMacShortCutKey];
    if (getInputMacShortKey && otherCommandKeys) 
        return Mac.Fn.HandleShortCut(getInputMacShortKey, ...otherCommandKeys);
    else 
        return Mac.Fn.TerminateCommand();
}

module.exports = ProcessUserShortCutCommand;