---
slug: /topten/mt05/configuration
id: mt05-configuration
sidebar_label: Configuration
title: TopTen - MT05 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del tracker TopTen MT05 con ajustes de servidor Plaspy y comandos SMS para instalación y validación rápida
keywords:
  - Configuración TopTen MT05
  - Instalación TopTen MT05
  - TopTen MT05 Plaspy
  - Configuración servidor MT05
  - Configuración rastreador GPS MT05
  - Configuración rastreador TopTen
  - Rastreo de vehículos MT05
  - Configuración plataforma GPS MT05
  - Configuración rastreadores Plaspy
  - Configuración SMS MT05
---

# TopTen - MT05 Configuración

Esta página ofrece orientación pública para configurar el dispositivo mini rastreador GPS TopTen MT05 con la plataforma Plaspy. Reúne los ajustes públicos relevantes y ejemplos de comandos SMS que se usan habitualmente para apuntar dispositivos MT05 a Plaspy, de modo que el equipo reporte ubicación y estado a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando se conecta. Los pasos del fabricante para establecer APN, servidor y otros parámetros pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y las herramientas del proveedor. El MT05 admite configuración vía SMS en los ejemplos que se muestran a continuación; ajuste el flujo de trabajo exacto según el firmware del dispositivo y los datos de la SIM/APN que utilice.

## Resumen de configuración

Esta configuración prepara al MT05 para enviar sus datos de GPS y estado al backend de Plaspy usando el endpoint y puerto compartidos de Plaspy. Los comandos públicos que aparecen más abajo muestran cómo establecer el APN/GPRS y los parámetros del servidor por SMS, y cómo verificar que los ajustes se aplicaron correctamente.

- Configure el APN y el servidor GPRS del dispositivo para que pueda usar datos móviles y alcanzar Plaspy.
- Apunte el dispositivo al endpoint del servidor Plaspy para que las posiciones reportadas aparezcan en la plataforma.
- Verifique el identificador del dispositivo y la respuesta del servidor para que Plaspy pueda asociar los datos entrantes con el rastreador.
- Use los comandos SMS proporcionados para restablecer, aplicar y comprobar la configuración cuando el ajuste por SMS sea compatible.
- Valide la conectividad y los reportes en Plaspy después de la configuración para asegurar visibilidad y monitoreo.

## Ajustes del servidor Plaspy

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when the device connects

Estos valores son los ajustes públicos del servidor Plaspy usados para la configuración del MT05 y son necesarios en los ejemplos y en el flujo de trabajo que se presentan a continuación.

## Requisitos típicos antes de la configuración

- Dispositivo encendido e instalado o accesible para la configuración inicial.
- Tarjeta SIM activa con capacidad de datos o SMS y credenciales APN conocidas.
- Conocimiento del IMEI del dispositivo para determinar el identificador del rastreador (el MT05 usa el IMEI en su salida PAR).
- Capacidad para enviar comandos SMS al dispositivo desde un número autorizado.
- Acceso al formato de comandos SMS del fabricante o a la herramienta de configuración, así como la contraseña SMS del dispositivo si aplica.
- Confirmación del comportamiento del firmware actual con el proveedor cuando sea posible.

## Cómo se conecta este rastreador a Plaspy

El MT05 reporta ubicación y estado al endpoint de Plaspy después de configurarlo con la dirección y el puerto del servidor Plaspy. Plaspy recibe los mensajes del dispositivo y los vincula a un identificador de rastreador para que el equipo sea visible en la plataforma.

- El rastreador se configura para reportar al endpoint y puerto compartidos de Plaspy.
- Los informes se envían vía datos móviles (GPRS) tras configurar APN y servidor, o por SMS cuando está soportado para ciertos mensajes.
- Plaspy asocia los datos entrantes con el identificador del rastreador derivado del IMEI (los últimos 14 dígitos según se muestra en la salida PAR del dispositivo).
- Plaspy detecta automáticamente el protocolo del dispositivo, por lo que solo necesita apuntar el equipo a d.plaspy.com o a la IP del servidor Plaspy y usar el puerto común.
- Tras la configuración, los eventos y actualizaciones de estado aparecen en Plaspy para monitoreo y alertas.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de TopTen para el MT05 (comandos SMS como los indicados por el fabricante o el software de configuración del proveedor).
2. Obtenga el IMEI del dispositivo e identifique el ID del rastreador (el MT05 reporta el ID correspondiente a los últimos 14 dígitos del IMEI en la salida PAR).
3. Introduzca la dirección del servidor Plaspy ya sea como dominio d.plaspy.com o la IP 54.85.159.138 cuando configure el dispositivo.
4. Ajuste el puerto a 8888 en la configuración del equipo.
5. Seleccione UDP o TCP si el dispositivo requiere elegir un transporte.
6. Aplique o guarde la configuración y envíe los comandos SMS que el dispositivo requiera.
7. Reinicie o corte y vuelva a aplicar energía al dispositivo si el fabricante lo recomienda.
8. Valide que el dispositivo reporte a Plaspy y confirme que el rastreador aparece y se actualiza en la plataforma.

## Ejemplos de comandos de configuración

El MT05 puede configurarse vía SMS usando el formato de comandos provisto por TopTen. A continuación se muestran ejemplos públicos extraídos de la guía del fabricante. Los comandos en estos ejemplos usan un prefijo de contraseña SMS mostrado como 111111; reemplace este prefijo por la contraseña de su dispositivo si es distinta.

- Restablecimiento opcional a fábrica (usar solo cuando sea necesario):
```text
111111CLR
```

- Establecer APN y servidor GPRS de Plaspy (ejemplo). Mantenga los marcadores de posición [apn], [apnu] y [apnp] y sustitúyalos por los valores de su proveedor de SIM:
```text
111111WWW:IPN:54.85.159.138;COM:8888;APN:[apn],[apnu],[apnp];RPT:60;SLP:60;RUN:2;
```
Explicación de marcadores de posición:
- [apn] — nombre del APN de su operador móvil
- [apnu] — usuario del APN si es requerido (dejar vacío si no aplica)
- [apnp] — contraseña del APN si es requerida (dejar vacío si no aplica)

- Comprobar o consultar los ajustes WWW/GPRS actuales:
```text
111111WWW:
```

Notas:
- El ejemplo usa la IP del servidor Plaspy 54.85.159.138 y puerto 8888. Puede sustituir d.plaspy.com cuando el dispositivo acepte un nombre de dominio.
- Los parámetros RPT, SLP y RUN incluidos son parámetros del dispositivo según el ejemplo del fabricante. Manténgalos según lo requiera su firmware o adáptelos según la documentación del proveedor.

## Notas de configuración

- Las variaciones de firmware pueden cambiar la sintaxis exacta de los comandos; confirme siempre el formato SMS para la versión de firmware de su MT05.
- El MT05 admite configuración por SMS en los ejemplos públicos; las herramientas del proveedor o una app de configuración pueden ofrecer un flujo alternativo.
- Elija TCP o UDP según la capacidad del dispositivo; Plaspy soporta ambos y detectará automáticamente el protocolo al conectarse.
- Use el mismo puerto Plaspy 8888 para todos los dispositivos configurados para reportar a Plaspy; la plataforma emplea un puerto compartido para las conexiones entrantes.
- Tenga a mano las credenciales APN y verifique que la SIM tenga datos y SMS habilitados antes de aplicar los ajustes del servidor GPRS.

## Por qué usar Plaspy con esta configuración

Usar el TopTen MT05 con Plaspy proporciona una forma simple de centralizar datos de ubicación, estado y alertas de una flota de dispositivos en una sola plataforma. Al apuntar el MT05 al servidor y puerto compartidos de Plaspy, las organizaciones obtienen visibilidad continua, informes de eventos consolidados y supervisión operativa más sencilla sin tener que gestionar la diversidad de servidores a nivel de dispositivo.

Para obtener más información sobre Plaspy y cómo puede gestionar rastreadores como el TopTen MT05, visite https://www.plaspy.com. Para detalles de configuración específicos del dispositivo, notas de firmware e instrucciones del fabricante, verifique la información en el sitio de TopTen http://www.t10.cn ya que la documentación del proveedor puede cambiar con el tiempo.
