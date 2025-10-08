import React from 'react';
import { Chip, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface SearchTagProps {
    label: string;
    onRemove: () => void;
}

export default function SearchTag({ label, onRemove }: SearchTagProps) {
    return (
        <Chip
            label={label}
            onDelete={onRemove}
            deleteIcon={<CloseIcon />}
            variant="outlined"
            size="small"
            sx={{
                backgroundColor: 'primary.50',
                borderColor: 'primary.main',
                color: 'primary.main',
                mr: 1, // margin phải
                mb: 1, // margin dưới
                '& .MuiChip-deleteIcon': {
                    color: 'primary.main',
                    '&:hover': {
                        color: 'primary.dark'
                    }
                },
                '&:hover': {
                    backgroundColor: 'primary.100'
                }
            }}
        />
    );
}

interface SearchTagsContainerProps {
    tags: string[];
    onRemoveTag: (tag: string) => void;
}

export function SearchTagsContainer({ tags, onRemoveTag }: SearchTagsContainerProps) {
    if (tags.length === 0) return null;

    return (
        <Box
            display="flex"
            flexWrap="wrap"
            alignItems="center"
            mt={1}   // khoảng cách phía trên
            // mb={2}   // khoảng cách phía dưới
        >
            {tags.map((tag, index) => (
                <SearchTag
                    key={`${tag}-${index}`}
                    label={tag}
                    onRemove={() => onRemoveTag(tag)}
                />
            ))}
        </Box>
    );
}
