---
slug: /tk_star/obd2_gps_tracker/configuration
id: obd2_gps_tracker-configuration
sidebar_label: Configuration
title: TK-Star - OBD2 GPS Tracker Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador OBD2 TK-Star para Plaspy, con ajustes de servidor, comandos SMS y flujo de trabajo
keywords:
  - TK Star rastreador OBD2 GPS
  - Configuración OBD2 TK Star
  - Configuración rastreador OBD2 Plaspy
  - Configuración rastreador GPS vehicular
  - Ajustes de servidor Plaspy
  - Comandos SMS rastreador OBD2
  - Configuración seguimiento de flotas
  - Integración telemetría OBD2
  - Configuración plataforma rastreador GPS
  - Configuración servidor de rastreador
---

# TK-Star - Configuración del rastreador OBD2 GPS

Esta página documenta el contexto público de configuración para usar el rastreador OBD2 TK-Star con Plaspy. Se enfoca en los ajustes prácticos de servidor y del dispositivo que debe aplicar para que la unidad reporte ubicación y telemetría en la plataforma Plaspy. Cuando corresponde, también se incluyen los comandos SMS provistos por el fabricante que se usan comúnmente para preparar este dispositivo OBD2 para la ingestión en Plaspy.

Plaspy utiliza ajustes compartidos de servidor para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador en las conexiones entrantes. Los pasos exactos en el lado del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor; considere las instrucciones a continuación como orientación práctica y consulte al fabricante si algún paso difiere en su unidad. Este rastreador puede configurarse mediante comandos SMS como se muestra en la sección de comandos de ejemplo o mediante herramientas de aprovisionamiento del proveedor cuando estén disponibles.

## Visión general de la configuración

Este proceso prepara el rastreador OBD2 TK-Star para comunicarse con Plaspy configurando el APN del dispositivo, el endpoint del servidor, el intervalo de actualización y el modo de operación. El objetivo es asegurar conectividad GPRS confiable y destinos correctos para que Plaspy detecte automáticamente el protocolo del dispositivo e ingiera ubicación y datos de diagnóstico.

- Configure el acceso a la red (APN y credenciales APN opcionales) para que el dispositivo use GPRS.
- Apunte el rastreador al endpoint de servidor de Plaspy para que los datos lleguen a su cuenta Plaspy.
- Establezca un intervalo de subida adecuado para equilibrar la capacidad de respuesta del rastreo con el uso de datos.
- Cambie el dispositivo a modo GPRS (en línea) para que envíe telemetría a Plaspy.
- Verifique que el dispositivo sea visible en Plaspy después de aplicar ajustes y reiniciar si es necesario.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado: UDP o TCP según la preferencia del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador en las conexiones entrantes y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de la configuración

- Un vehículo con un puerto OBD2 accesible y un zócalo OBD2 alimentado para el rastreador.
- Una tarjeta SIM activa con datos habilitados y los datos APN correctos del operador móvil.
- Capacidad para enviar comandos SMS al número del rastreador o acceso a la herramienta de configuración del fabricante si la proporciona.
- Información básica del dispositivo, como la contraseña por defecto (los comandos de ejemplo usan la contraseña 123456).
- Una cuenta en Plaspy y conocimiento de cómo verificar dispositivos en la plataforma Plaspy después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El rastreador se configura para reportar ubicación y telemetría OBD2 seleccionada al endpoint compartido de servidor y puerto de Plaspy, de modo que Plaspy pueda ingerir, mostrar y generar alertas sobre esos datos. La detección automática de protocolos de Plaspy significa que solo necesita apuntar el dispositivo al servidor y puerto de Plaspy; la plataforma se encarga de la negociación del protocolo.

- El dispositivo envía datos GPRS a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Plaspy recibe actualizaciones GNSS y posicionamiento asistido por red para mapeo en tiempo real.
- Los diagnósticos del vehículo y los PIDs OBD2 soportados se reenvían a Plaspy cuando están disponibles.
- Plaspy correlaciona movimiento, geocercas y eventos de manipulación para monitoreo y alertas.
- La conectividad del dispositivo y el intervalo de subida influyen en la frecuencia con la que Plaspy recibe actualizaciones.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración del fabricante o al software, o prepárese para enviar comandos SMS al número del rastreador.
2. Configure el APN del dispositivo y, si aplica, el nombre de usuario y contraseña del APN según su operador móvil.
3. Introduzca d.plaspy.com o 54.85.159.138 como destino del servidor GPRS.
4. Establezca el puerto del servidor en 8888 y elija UDP o TCP si el dispositivo requiere seleccionar el transporte.
5. Aplique o guarde la configuración en el dispositivo y cambie la unidad a modo GPRS (en línea).
6. Reinicie o corte la alimentación del rastreador si el fabricante lo requiere para aplicar los ajustes de red.
7. Valide que el dispositivo reporte a Plaspy confirmando su visibilidad y actualizaciones de posición recientes en su cuenta Plaspy.

## Ejemplos de comandos de configuración

El rastreador OBD2 TK-Star puede configurarse mediante comandos SMS. Los comandos de ejemplo a continuación son públicos y usan la contraseña por defecto del dispositivo 123456. Envíe cada comando como SMS al número del rastreador. Conserve los marcadores de posición donde se indican.

1. Reinicio de fábrica opcional inicial (use solo si necesita restaurar valores predeterminados)
```
begin123456
```

2. Establecer el APN del operador (reemplace {{apn}} con el APN de su operador)
```
apn123456 {{apn}}
```

3. Establecer el nombre de usuario del APN si lo requiere su operador (reemplace {{apnu}} con el usuario)
```
apnuser123456 {{apnu}}
```

4. Establecer la contraseña del APN si lo requiere su operador (reemplace {{apnp}} con la contraseña)
```
apnpasswd123456 {{apnp}}
```

5. Configurar el servidor GPRS a Plaspy por IP y puerto (apunta el dispositivo a Plaspy)
```
adminip123456 54.85.159.138 8888
```

6. Establecer el intervalo de subida de posición a 60 segundos
```
upload123456 60
```

7. Cambiar el dispositivo a modo GPRS para que empiece a enviar datos
```
gprs123456
```

Notas sobre marcadores de posición y comandos:
- {{apn}}, {{apnu}} y {{apnp}} son marcadores de posición para el APN del operador, el nombre de usuario del APN y la contraseña del APN respectivamente. Sustituya estos valores por los correctos para la SIM en el dispositivo.
- La contraseña numérica 123456 en estos ejemplos es la contraseña por defecto pública del dispositivo. Si ha cambiado la contraseña, use la contraseña actual.
- El comando adminip anterior usa la IP y el puerto del servidor Plaspy. Alternativamente puede apuntar a d.plaspy.com si el dispositivo acepta nombres de host.

## Notas de configuración

- La configuración vía SMS es un método público común para dispositivos TK-Star; algunas implementaciones pueden usar software del proveedor o aprovisionamiento OTA en su lugar.
- Revisiones de firmware y variantes de hardware pueden cambiar el formato de los comandos o los parámetros requeridos; consulte las notas de la versión del fabricante si un comando es rechazado.
- Elija UDP o TCP según sus pruebas y la fiabilidad de la red; Plaspy soporta ambos y detectará el protocolo automáticamente al conectarse.
- Confirme los ajustes APN con su operador móvil antes de configurar para evitar fallas de conexión GPRS.
- Tras cambiar servidor o APN, puede ser necesario reiniciar o cortar la alimentación del dispositivo para que los cambios surtan efecto.

## Por qué usar Plaspy con esta configuración

Configurar el rastreador OBD2 TK-Star para enviar datos a Plaspy posibilita el seguimiento centralizado de vehículos, monitoreo de diagnósticos y gestión de eventos sin cableado complejo. El factor de forma plug-and-play OBD2 junto con la detección automática de protocolos y la configuración de servidor compartida de Plaspy simplifican el aprovisionamiento en flotas y ayudan a los operadores a lograr telemetría y alertas consistentes.

Para saber más sobre Plaspy y cómo soporta integraciones de rastreadores, visite https://www.plaspy.com. Para los comandos específicos más recientes, notas de firmware y orientación del fabricante, verifique los detalles en el sitio de TK-Star https://www.tk-star.com/ ya que las especificaciones y métodos de configuración del fabricante pueden cambiar con el tiempo.
