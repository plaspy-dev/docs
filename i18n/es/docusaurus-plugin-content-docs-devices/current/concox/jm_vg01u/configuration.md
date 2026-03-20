---
slug: /concox/jm_vg01u/configuration
id: jm_vg01u-configuration
sidebar_label: Configuration
title: Concox - JM-VG01U Configuration
sidebar_class_name: menu_item_tracker
description: Configurar el Concox JM-VG01U para Plaspy con ajustes de servidor compartido, comandos SMS y guía práctica
keywords:
  - configuración Concox JM-VG01U
  - instalación Concox JM VG01U
  - JM-VG01U configuración Plaspy
  - configuración servidor JM-VG01U
  - configuración rastreador GPS Concox
  - comandos SMS JM-VG01U
  - integración rastreador GPS Plaspy
  - configuración rastreador vehicular
  - configuración rastreador de flotas Concox
  - configuración GNSS INS
---

# Concox - Configuración del JM-VG01U

Esta página resume la guía pública de configuración para usar el rastreador Concox JM-VG01U con Plaspy. Se concentra en los ajustes compartidos del servidor Plaspy y en los pasos prácticos que usted puede seguir para preparar el JM-VG01U y que envíe telemetría y eventos al backend de Plaspy. Cuando están disponibles, se incluyen los comandos SMS comunes del fabricante en la sección de comandos de ejemplo.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión del firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El JM-VG01U soporta flujos de configuración por SMS y GPRS en la documentación pública; use el método de configuración oficial de Concox correspondiente a su equipo y firmware al aplicar los valores mostrados aquí.

## Resumen de configuración

El objetivo de la configuración es conectar el JM-VG01U a Plaspy para que el dispositivo envíe de forma fiable su posición y datos de eventos a la plataforma. Una configuración típica establece el servidor GPRS / ajustes SMS, configura los datos del APN y elige el tipo de transporte para que Plaspy pueda ingerir la telemetría en el endpoint y puerto compartidos.

- Apunte el rastreador al endpoint y puerto del servidor Plaspy para que reporte ubicación y eventos a la plataforma.
- Configure el APN y habilite GPRS para permitir el uso de datos celulares en los reportes.
- Seleccione UDP o TCP si el firmware del dispositivo lo requiere y guarde la configuración.
- Establezca un temporizador de subida apropiado para que Plaspy reciba actualizaciones periódicas de posición.
- Verifique que el rastreador sea visible en Plaspy después de reiniciarlo o reconectarlo y use el comando de verificación para solucionar problemas.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888 (Plaspy uses the same port for all supported devices)  
- Transport: UDP or TCP can be used on port 8888 depending on device preference  
- Plaspy automatically detects the tracker protocol so devices can be accepted without manual protocol selection on the server side

## Requisitos típicos previos a la configuración

- Un JM-VG01U con alimentación instalado en el vehículo o conectado a una fuente de banco de pruebas para realizar la configuración y las pruebas.  
- Una tarjeta Micro SIM activa con datos habilitados y el APN correcto del operador móvil. El APN puede requerir nombre de usuario y contraseña como marcadores [apnu] y [apnp].  
- Acceso al método de configuración soportado por su unidad y firmware, como comandos SMS o software del fabricante.  
- Un número de teléfono conocido con capacidad para enviar y recibir SMS, por si utiliza la configuración vía SMS.  
- Conocimientos básicos sobre si su implementación requiere UDP o TCP y un plan para validar la conectividad después de los cambios.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el JM-VG01U envía posición GNSS, eventos derivados de sensores inerciales y entradas digitales a través del enlace GPRS al servidor Plaspy. El rastreador se configura para reportar al endpoint y puerto compartidos de Plaspy, de modo que la plataforma reciba y procese el flujo de telemetría.

- El dispositivo envía paquetes de posición y estado a d.plaspy.com (o a la IP del servidor Plaspy) en el puerto 8888.  
- Entradas de evento como ACC (ignición), SOS y acciones de relay se reenvían a Plaspy para generar alertas.  
- Eventos INS y del sensor de movimiento se incluyen en la telemetría y son útiles para análisis de comportamiento y seguridad.  
- Plaspy recibe actualizaciones periódicas según el intervalo TIMER configurado y muestra el dispositivo como activo en la plataforma.  
- Todos los dispositivos soportados por Plaspy usan el mismo puerto y la plataforma detecta automáticamente el protocolo entrante.

## Flujo típico de configuración

1. Acceda al método oficial de configuración Concox para su unidad JM-VG01U, por ejemplo comandos SMS o la herramienta del proveedor.  
2. Introduzca la dirección del servidor Plaspy: d.plaspy.com o 54.85.159.138 en los ajustes de servidor del equipo.  
3. Establezca el puerto del servidor a 8888 (nota: Plaspy usa el mismo puerto para todos los dispositivos).  
4. Si su dispositivo requiere selección de transporte, elija UDP o TCP según la interfaz del equipo o la preferencia del instalador.  
5. Configure el APN del operador y cualquier nombre de usuario o contraseña de APN si la SIM lo requiere.  
6. Aplique o guarde la configuración y, si el equipo lo solicita, reinicie el rastreador para activar los nuevos ajustes.  
7. Valide la conectividad comprobando que el dispositivo reporta a Plaspy y use el comando de verificación del dispositivo si está disponible.

## Comandos de configuración de ejemplo

El JM-VG01U permite configuración por SMS. Los siguientes comandos reflejan la sintaxis pública documentada para este modelo. Conserve los marcadores al sustituir el APN y las credenciales del operador.

- Optional initial factory reset (only use if you need to return the device to factory defaults):
```text
FACTORY#
```

- Set the time zone to UTC+0:
```text
GMT,E,0#
```

- Set the operator APN (replace [apn] with your operator APN; include [apnu] and [apnp] if your APN requires a username or password):
```text
APN,[apn]{{,[apnu],[apnp]}}#
```
Note: Use the form with [apnu] and [apnp] only if your network requires APN credentials. The placeholder syntax above preserves the optional username and password fields.

- Set the GPRS server to use the Plaspy domain on port 8888:
```text
SERVER,1,d.plaspy.com,8888,0#
```

- Alternatively set the GPRS server using the Plaspy server IP on port 8888:
```text
SERVER,0,54.85.159.138,8888,0#
```

- Set the upload interval to every 60 seconds (short form):
```text
TIMER,60#
```

- Or set the upload interval with two parameters if required by firmware:
```text
TIMER,60,60#
```

- Enable GPRS mode:
```text
GPRSON,1#
```

- Verification command to check current GPRS parameters:
```text
GPRSSET#
```

Siga la sintaxis exacta de SMS que requiere su firmware. Algunas revisiones de firmware pueden esperar delimitadores o órdenes de parámetros ligeramente diferentes; confirme siempre con la documentación del fabricante si un comando no funciona como se muestra.

## Notas de configuración

- La configuración por SMS es un método público común para este modelo, aunque también pueden existir herramientas o software de configuración del fabricante; use el método apropiado para su instalación.  
- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis de los comandos o los parámetros disponibles; verifique los comandos frente al firmware de su equipo.  
- Elija UDP o TCP según la preferencia del instalador; ambos transportes son aceptados y Plaspy recibirá paquetes en el puerto 8888 y detectará el protocolo automáticamente.  
- Mantenga las credenciales APN correctas; los ajustes APN incorrectos son la causa más frecuente de fallo en la conectividad GPRS. Reemplace los marcadores [apn], [apnu] y [apnp] por los valores del operador cuando sea necesario.  
- Después de aplicar los ajustes, reinicie el rastreador si el dispositivo lo requiere y confirme la visibilidad en Plaspy usando el comando de verificación y el estado del dispositivo en la plataforma.

## Por qué usar Plaspy con esta configuración

Usar el JM-VG01U con Plaspy ofrece a los operadores de flotas un rastreador compacto con asistencia INS que aporta posición, eventos inerciales y alertas basadas en entradas a una única plataforma. Esa combinación permite mantener visibilidad, recibir notificaciones oportunas de seguridad y analizar kilometraje y comportamiento para respaldar decisiones operativas.

Para obtener más información sobre Plaspy y las capacidades de la plataforma, visite https://www.plaspy.com. Verifique siempre los detalles específicos de configuración del dispositivo y el comportamiento del firmware más recientes en el sitio del fabricante https://www.iconcox.com/ ya que los métodos de configuración y la sintaxis de comandos pueden cambiar con nuevas versiones de firmware y hardware.
