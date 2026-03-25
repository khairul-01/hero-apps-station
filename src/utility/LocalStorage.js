
const getApps = (key) => {
    const stored = localStorage.getItem(key)
    return stored ? JSON.parse(stored) : [];
}

const savedApps = (key, app) => {
    localStorage.setItem(key, JSON.stringify(app))
}

export const getSavedApps = () => getApps('installedApps');

export const isInstalledApps = (id) => getSavedApps().includes(id);

export const addInstalledApps = (id) => {
    const appIds = getSavedApps();
    console.log(appIds, typeof id)
    if(!isInstalledApps()) {
        appIds.push(id)
        savedApps('installedApps', appIds)
    }
}