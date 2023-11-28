/*
 * Copyright (C) 2023  Yomitan Authors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import type {PopupMenu} from '../../ext/js/dom/popup-menu';

export type EventType = 'close';

export type CloseReason = 'close' | 'outside' | 'item' | 'resize';

export type MenuOpenEventDetails = {
    menu: PopupMenu;
};

export type MenuCloseEventDetails = {
    menu: PopupMenu;
    item: HTMLElement | null;
    action: string | null;
    cause: CloseReason;
    altKey: boolean;
    ctrlKey: boolean;
    metaKey: boolean;
    shiftKey: boolean;
};

export type MenuOpenEvent = CustomEvent<MenuOpenEventDetails>;

export type MenuCloseEvent = CustomEvent<MenuCloseEventDetails>;
