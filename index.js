//1: tính tổng
var arrNumber = [];
document.getElementById('btnThemSo').onclick = function () {
    var themSo = Number(document.getElementById('themSo').value);
    var inSo = 0;
    arrNumber.push(themSo);
    inSo = '[' + arrNumber + ']';
    document.getElementById('arrNumber').innerHTML = inSo;
}
document.getElementById('btnTinhTong').onclick = function () {
    var tongSo = 0;
    for (var i = 0; i < arrNumber.length; i++) {
        tongSo += arrNumber[i];
    }
    document.getElementById('ketQua').innerHTML = 'Tổng số dương ' + tongSo;
}

//2. đếm có bao nhiêu số dương trong mảng
document.getElementById('btnDem').onclick = function () {
    var dem = 0;
    for (var i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] > 0)
            dem++;
    }
    document.getElementById('ketQua2').innerHTML = dem;
}
//3. Tìm số nhỏ nhất trong mảng
document.getElementById('btnSoNhoNhat').onclick = function () {
    var soNhoNhat = Math.min.apply(Math, arrNumber);

    document.getElementById('ketQua3').innerHTML = soNhoNhat;

}
//4. tìm số dương nhỏ nhất trong mảng
document.getElementById('btnSoDuongNhoNhat').onclick = function () {
    var SoDuongNhoNhat = Math.min.apply(Math, arrNumber);
    for (var i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] > 0) {
            SoDuongNhoNhat = arrNumber[i];
            break;
        }
    }

    document.getElementById('ketQua4').innerHTML = SoDuongNhoNhat;
}

//5.Tìm số chẵn cuối cùng trong mảng , Nếu k có trả về -1
document.getElementById('btnSoChan').onclick = function () {
    var soChan = 0;
    for (var i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] % 2 == 0) {
            soChan = arrNumber[i];
        } else {
            soChan = -1;
        }
    }
    document.getElementById('ketQua5').innerHTML = soChan;
}
//6. Đổi chỗ 2 giá trị trong mảng theo vị trí
document.getElementById('btnDoiViTri').onclick = function () {
    var viTri1 = Number(document.getElementById('viTri1').value);
    var viTri2 = Number(document.getElementById('viTri2').value);
    Array.prototype.swapItems = function (viTri1, viTri2) {
        this[viTri1] = this.splice(viTri2, 1, this[viTri1])[0];
        return this;
    }
    document.getElementById('ketQua6').innerHTML = arrNumber.swapItems(viTri1, viTri2);
}

//7. Sắp xếp mảng theo thứ tự tăng dần
document.getElementById('btnSapXep').onclick = function () {
    var sapXep = arrNumber;

    sapXep.sort();
    document.getElementById('ketQua7').innerHTML = ' Mảng sau khi sắp xếp ' + sapXep;
}
//8. Tìm số nguyên tố đầu tiên
document.getElementById('btnSoNguyenTo').onclick = function () {


    document.getElementById('ketQua8').innerHTML = 'Số nguyên tố trong mảng là ' + arrNumber;
}

//9. đếm số nguyên
document.getElementById('btnDemSo').onclick = function () {
    var demSNT = Number.isInteger(0);
    for (var i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] >= 0)
            demSNT++;
    }
    document.getElementById('ketQua9').innerHTML = 'Số nguyên ' + demSNT;
}

//10.so sanh số âm và số dương
document.getElementById('btnSoSanh').onclick = function () {
    var demSoDuong = 0;
    var demSoAm = 0;
    var soSanh = '';

    for (var i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] > 0)
            demSoDuong++;
    }
    for (var i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] < 0)
            demSoAm++;
    }
    if (soSanh < 0) {
        soSanh = demSoAm > demSoDuong;
    } else {
        soSanh = demSoDuong > demSoAm;
    }
    document.getElementById('ketQua10').innerHTML = soSanh;
}