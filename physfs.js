var FFI = require('ffi'),
    ArrayType = require('ref-array'),
    Struct = require('ref-struct'),
    ref = require('ref');

var voidPtr = ref.refType(ref.types.void);

exports.CONSTANTS = {
};

var PHYSFS_Version = exports.PHYSFS_Version = Struct({
  major: ref.types.uchar,
  minor: ref.types.uchar,
  patch: ref.types.uchar,
});
var PHYSFS_VersionPtr = exports.PHYSFS_VersionPtr = ref.refType(PHYSFS_Version);
var PHYSFS_File = exports.PHYSFS_File = Struct({
  opaque: voidPtr,
});
var PHYSFS_FilePtr = exports.PHYSFS_FilePtr = ref.refType(PHYSFS_File);
var PHYSFS_sint16 = exports.PHYSFS_sint16 = voidPtr;
var PHYSFS_sint16Ptr = exports.PHYSFS_sint16Ptr = ref.refType(PHYSFS_sint16);
var PHYSFS_uint16 = exports.PHYSFS_uint16 = voidPtr;
var PHYSFS_uint16Ptr = exports.PHYSFS_uint16Ptr = ref.refType(PHYSFS_uint16);
var PHYSFS_sint32 = exports.PHYSFS_sint32 = voidPtr;
var PHYSFS_sint32Ptr = exports.PHYSFS_sint32Ptr = ref.refType(PHYSFS_sint32);
var PHYSFS_uint32 = exports.PHYSFS_uint32 = voidPtr;
var PHYSFS_uint32Ptr = exports.PHYSFS_uint32Ptr = ref.refType(PHYSFS_uint32);
var PHYSFS_sint64 = exports.PHYSFS_sint64 = voidPtr;
var PHYSFS_sint64Ptr = exports.PHYSFS_sint64Ptr = ref.refType(PHYSFS_sint64);
var PHYSFS_uint64 = exports.PHYSFS_uint64 = voidPtr;
var PHYSFS_uint64Ptr = exports.PHYSFS_uint64Ptr = ref.refType(PHYSFS_uint64);
var PHYSFS_Allocator = exports.PHYSFS_Allocator = Struct({
  Init: voidPtr,
  Deinit: voidPtr,
  Malloc: voidPtr,
  Realloc: voidPtr,
  Free: voidPtr,
});
var PHYSFS_AllocatorPtr = exports.PHYSFS_AllocatorPtr = ref.refType(PHYSFS_Allocator);
var PHYSFS_StringCallback = exports.PHYSFS_StringCallback = FFI.Function(ref.types.void, [
  voidPtr,
  ref.types.CString,
]);
var PHYSFS_StringCallbackPtr = exports.PHYSFS_StringCallbackPtr = ref.refType(PHYSFS_StringCallback);
var PHYSFS_EnumFilesCallback = exports.PHYSFS_EnumFilesCallback = FFI.Function(ref.types.void, [
  voidPtr,
  ref.types.CString,
  ref.types.CString,
]);
var PHYSFS_EnumFilesCallbackPtr = exports.PHYSFS_EnumFilesCallbackPtr = ref.refType(PHYSFS_EnumFilesCallback);

exports.functions = new FFI.Library('libphysfs', {
  PHYSFS_getLinkedVersion: [ref.types.void, [
    PHYSFS_VersionPtr,
  ]],
  PHYSFS_init: [ref.types.int32, [
    ref.types.CString,
  ]],
  PHYSFS_deinit: [ref.types.int32, [
  ]],
  PHYSFS_supportedArchiveTypes: [voidPtr, [
  ]],
  PHYSFS_freeList: [ref.types.void, [
    voidPtr,
  ]],
  PHYSFS_getLastError: [ref.types.CString, [
  ]],
  PHYSFS_getDirSeparator: [ref.types.CString, [
  ]],
  PHYSFS_permitSymbolicLinks: [ref.types.void, [
    ref.types.int32,
  ]],
  PHYSFS_getCdRomDirs: [voidPtr, [
  ]],
  PHYSFS_getBaseDir: [ref.types.CString, [
  ]],
  PHYSFS_getUserDir: [ref.types.CString, [
  ]],
  PHYSFS_getWriteDir: [ref.types.CString, [
  ]],
  PHYSFS_setWriteDir: [ref.types.int32, [
    ref.types.CString,
  ]],
  PHYSFS_addToSearchPath: [ref.types.int32, [
    ref.types.CString,
    ref.types.int32,
  ]],
  PHYSFS_removeFromSearchPath: [ref.types.int32, [
    ref.types.CString,
  ]],
  PHYSFS_getSearchPath: [voidPtr, [
  ]],
  PHYSFS_setSaneConfig: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
    ref.types.CString,
    ref.types.int32,
    ref.types.int32,
  ]],
  PHYSFS_mkdir: [ref.types.int32, [
    ref.types.CString,
  ]],
  PHYSFS_delete: [ref.types.int32, [
    ref.types.CString,
  ]],
  PHYSFS_getRealDir: [ref.types.CString, [
    ref.types.CString,
  ]],
  PHYSFS_enumerateFiles: [voidPtr, [
    ref.types.CString,
  ]],
  PHYSFS_exists: [ref.types.int32, [
    ref.types.CString,
  ]],
  PHYSFS_isDirectory: [ref.types.int32, [
    ref.types.CString,
  ]],
  PHYSFS_isSymbolicLink: [ref.types.int32, [
    ref.types.CString,
  ]],
  PHYSFS_getLastModTime: [ref.types.longlong, [
    ref.types.CString,
  ]],
  PHYSFS_openWrite: [PHYSFS_FilePtr, [
    ref.types.CString,
  ]],
  PHYSFS_openAppend: [PHYSFS_FilePtr, [
    ref.types.CString,
  ]],
  PHYSFS_openRead: [PHYSFS_FilePtr, [
    ref.types.CString,
  ]],
  PHYSFS_close: [ref.types.int32, [
    PHYSFS_FilePtr,
  ]],
  PHYSFS_read: [ref.types.longlong, [
    PHYSFS_FilePtr,
    voidPtr,
    ref.types.uint32,
    ref.types.uint32,
  ]],
  PHYSFS_write: [ref.types.longlong, [
    PHYSFS_FilePtr,
    voidPtr,
    ref.types.uint32,
    ref.types.uint32,
  ]],
  PHYSFS_eof: [ref.types.int32, [
    PHYSFS_FilePtr,
  ]],
  PHYSFS_tell: [ref.types.longlong, [
    PHYSFS_FilePtr,
  ]],
  PHYSFS_seek: [ref.types.int32, [
    PHYSFS_FilePtr,
    ref.types.ulonglong,
  ]],
  PHYSFS_fileLength: [ref.types.longlong, [
    PHYSFS_FilePtr,
  ]],
  PHYSFS_setBuffer: [ref.types.int32, [
    PHYSFS_FilePtr,
    ref.types.ulonglong,
  ]],
  PHYSFS_flush: [ref.types.int32, [
    PHYSFS_FilePtr,
  ]],
  PHYSFS_swapSLE16: [ref.types.short, [
    ref.types.short,
  ]],
  PHYSFS_swapULE16: [ref.types.ushort, [
    ref.types.ushort,
  ]],
  PHYSFS_swapSLE32: [ref.types.int32, [
    ref.types.int32,
  ]],
  PHYSFS_swapULE32: [ref.types.uint32, [
    ref.types.uint32,
  ]],
  PHYSFS_swapSLE64: [ref.types.longlong, [
    ref.types.longlong,
  ]],
  PHYSFS_swapULE64: [ref.types.ulonglong, [
    ref.types.ulonglong,
  ]],
  PHYSFS_swapSBE16: [ref.types.short, [
    ref.types.short,
  ]],
  PHYSFS_swapUBE16: [ref.types.ushort, [
    ref.types.ushort,
  ]],
  PHYSFS_swapSBE32: [ref.types.int32, [
    ref.types.int32,
  ]],
  PHYSFS_swapUBE32: [ref.types.uint32, [
    ref.types.uint32,
  ]],
  PHYSFS_swapSBE64: [ref.types.longlong, [
    ref.types.longlong,
  ]],
  PHYSFS_swapUBE64: [ref.types.ulonglong, [
    ref.types.ulonglong,
  ]],
  PHYSFS_readSLE16: [ref.types.int32, [
    PHYSFS_FilePtr,
    PHYSFS_sint16,
  ]],
  PHYSFS_readULE16: [ref.types.int32, [
    PHYSFS_FilePtr,
    PHYSFS_uint16,
  ]],
  PHYSFS_readSBE16: [ref.types.int32, [
    PHYSFS_FilePtr,
    PHYSFS_sint16Ptr,
  ]],
  PHYSFS_readUBE16: [ref.types.int32, [
    PHYSFS_FilePtr,
    PHYSFS_uint16Ptr,
  ]],
  PHYSFS_readSLE32: [ref.types.int32, [
    PHYSFS_FilePtr,
    PHYSFS_sint32,
  ]],
  PHYSFS_readULE32: [ref.types.int32, [
    PHYSFS_FilePtr,
    PHYSFS_uint32,
  ]],
  PHYSFS_readSBE32: [ref.types.int32, [
    PHYSFS_FilePtr,
    PHYSFS_sint32Ptr,
  ]],
  PHYSFS_readUBE32: [ref.types.int32, [
    PHYSFS_FilePtr,
    PHYSFS_uint32Ptr,
  ]],
  PHYSFS_readSLE64: [ref.types.int32, [
    PHYSFS_FilePtr,
    PHYSFS_sint64,
  ]],
  PHYSFS_readULE64: [ref.types.int32, [
    PHYSFS_FilePtr,
    PHYSFS_uint64,
  ]],
  PHYSFS_readSBE64: [ref.types.int32, [
    PHYSFS_FilePtr,
    PHYSFS_sint64Ptr,
  ]],
  PHYSFS_readUBE64: [ref.types.int32, [
    PHYSFS_FilePtr,
    PHYSFS_uint64Ptr,
  ]],
  PHYSFS_writeSLE16: [ref.types.int32, [
    PHYSFS_FilePtr,
    ref.types.short,
  ]],
  PHYSFS_writeULE16: [ref.types.int32, [
    PHYSFS_FilePtr,
    ref.types.ushort,
  ]],
  PHYSFS_writeSBE16: [ref.types.int32, [
    PHYSFS_FilePtr,
    ref.types.short,
  ]],
  PHYSFS_writeUBE16: [ref.types.int32, [
    PHYSFS_FilePtr,
    ref.types.ushort,
  ]],
  PHYSFS_writeSLE32: [ref.types.int32, [
    PHYSFS_FilePtr,
    ref.types.int32,
  ]],
  PHYSFS_writeULE32: [ref.types.int32, [
    PHYSFS_FilePtr,
    ref.types.uint32,
  ]],
  PHYSFS_writeSBE32: [ref.types.int32, [
    PHYSFS_FilePtr,
    ref.types.int32,
  ]],
  PHYSFS_writeUBE32: [ref.types.int32, [
    PHYSFS_FilePtr,
    ref.types.uint32,
  ]],
  PHYSFS_writeSLE64: [ref.types.int32, [
    PHYSFS_FilePtr,
    ref.types.longlong,
  ]],
  PHYSFS_writeULE64: [ref.types.int32, [
    PHYSFS_FilePtr,
    ref.types.ulonglong,
  ]],
  PHYSFS_writeSBE64: [ref.types.int32, [
    PHYSFS_FilePtr,
    ref.types.longlong,
  ]],
  PHYSFS_writeUBE64: [ref.types.int32, [
    PHYSFS_FilePtr,
    ref.types.ulonglong,
  ]],
  PHYSFS_isInit: [ref.types.int32, [
  ]],
  PHYSFS_symbolicLinksPermitted: [ref.types.int32, [
  ]],
  PHYSFS_setAllocator: [ref.types.int32, [
    PHYSFS_AllocatorPtr,
  ]],
  PHYSFS_mount: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
    ref.types.int32,
  ]],
  PHYSFS_getMountPoint: [ref.types.CString, [
    ref.types.CString,
  ]],
  PHYSFS_getCdRomDirsCallback: [ref.types.void, [
    PHYSFS_StringCallback,
    voidPtr,
  ]],
  PHYSFS_getSearchPathCallback: [ref.types.void, [
    PHYSFS_StringCallback,
    voidPtr,
  ]],
  PHYSFS_enumerateFilesCallback: [ref.types.void, [
    ref.types.CString,
    PHYSFS_EnumFilesCallback,
    voidPtr,
  ]],
  PHYSFS_utf8FromUcs4: [ref.types.void, [
    PHYSFS_uint32Ptr,
    ref.types.CString,
    ref.types.ulonglong,
  ]],
  PHYSFS_utf8ToUcs4: [ref.types.void, [
    ref.types.CString,
    PHYSFS_uint32Ptr,
    ref.types.ulonglong,
  ]],
  PHYSFS_utf8FromUcs2: [ref.types.void, [
    PHYSFS_uint16Ptr,
    ref.types.CString,
    ref.types.ulonglong,
  ]],
  PHYSFS_utf8ToUcs2: [ref.types.void, [
    ref.types.CString,
    PHYSFS_uint16Ptr,
    ref.types.ulonglong,
  ]],
  PHYSFS_utf8FromLatin1: [ref.types.void, [
    ref.types.CString,
    ref.types.CString,
    ref.types.ulonglong,
  ]],
});

