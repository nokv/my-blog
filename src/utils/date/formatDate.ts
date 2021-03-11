export const formatDate = (date: string): string => {
    const convertOptions = {
        month: 'long',
        day: '2-digit',
        year: 'numeric',
    } as const;
    return new Date(date).toLocaleDateString('en-US', convertOptions);
};
