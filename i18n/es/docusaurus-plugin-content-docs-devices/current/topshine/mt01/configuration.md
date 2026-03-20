---
slug: /topshine/mt01/configuration
id: mt01-configuration
sidebar_label: Configuration
title: TopShine - MT01 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador TopShine MT01 para apuntar al servidor Plaspy con comandos SMS y flujo de instalación
keywords:
  - Configuración TopShine MT01
  - Configuración MT01
  - Configuración MT01 Plaspy
  - Configuración servidor MT01
  - Configuración rastreador TopShine
  - Configuración plataforma MT01
  - Configuración rastreador Plaspy
  - Configuración SMS rastreador GPS
  - Rastreo vehicular MT01
  - Rastreo de flota TopShine
---

# TopShine - Configuración MT01

Esta página recopila el contexto público de configuración para usar el rastreador TopShine MT01 con Plaspy. Contiene los pasos prácticos y los comandos SMS de uso común que permiten apuntar un dispositivo MT01 a Plaspy para que envíe datos de ubicación y eventos a la plataforma.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El MT01 admite configuración por SMS y por GPRS; los ejemplos de comandos SMS abajo usan la contraseña por defecto 000000 tal como aparece en la documentación pública del dispositivo.

## Resumen de la configuración

El objetivo de este proceso es preparar el MT01 para una comunicación fiable con Plaspy, de modo que el dispositivo aparezca en la plataforma, reporte telemetría y envíe notificaciones de eventos.

- Configurar el APN y los ajustes GPRS para que el dispositivo use datos móviles y alcance Plaspy
- Establecer el servidor y el puerto del dispositivo con los valores compartidos de Plaspy
- Seleccionar el transporte (UDP o TCP) si el rastreador exige elegirlo
- Validar la identidad y conectividad del dispositivo para que Plaspy asocie los reportes con el vehículo correcto
- Confirmar el intervalo y modo de envío para que el rastreador envíe las actualizaciones esperadas a la plataforma

## Ajustes del servidor Plaspy

Utilice los siguientes valores públicos de servidor Plaspy al configurar el MT01 para reporte por GPRS:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; configure UDP o TCP en el rastreador si es necesario
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos habituales antes de comenzar

- Un dispositivo MT01 con alimentación instalado o accesible para pruebas
- Una SIM activa con datos habilitados y el APN correcto del operador móvil
- Un método para enviar comandos SMS al rastreador o acceso a la herramienta de configuración del proveedor
- Conocimiento del IMEI del dispositivo y acceso a la contraseña por defecto si se requiere
- Una cuenta en Plaspy o contacto del integrador para verificar que el dispositivo aparece en la plataforma tras la configuración

## Cómo se conecta este rastreador a Plaspy

Cuando se configura por GPRS, el MT01 envía reportes de posición y eventos al endpoint y puerto compartidos de Plaspy. Plaspy ingiere esos reportes, los asocia al identificador del dispositivo y muestra posiciones en tiempo real, alertas e historial en la plataforma.

- El dispositivo se configura para reportar a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888
- El transporte puede ser UDP o TCP según la configuración del rastreador y la preferencia del instalador
- Plaspy detecta automáticamente el protocolo del rastreador para poder interpretar los mensajes entrantes
- Los reportes del MT01 permiten a Plaspy ofrecer rastreo en vivo, alertas de geocerca y eventos, y trazas históricas
- La validación en Plaspy confirma que el dispositivo se comunica y usa el intervalo de reporte esperado

## Flujo típico de configuración

1. Acceda al método oficial de configuración del TopShine MT01, por ejemplo comandos SMS o la herramienta del proveedor incluida con el equipo
2. Configure los valores APN del operador para que el rastreador pueda acceder a internet
3. Ingrese d.plaspy.com o 54.85.159.138 como host del servidor GPRS
4. Configure el puerto 8888 y seleccione UDP o TCP si el dispositivo requiere elegir el transporte
5. Aplique o guarde la configuración en el dispositivo y envíe los comandos por SMS si utiliza ese método
6. Reinicie el dispositivo si el fabricante recomienda un reinicio tras los cambios
7. Verifique que el dispositivo reporte a Plaspy y aparezca en la plataforma con el intervalo de actualización esperado

## Comandos de configuración de ejemplo

El MT01 puede configurarse enviando comandos SMS al dispositivo. Los ejemplos públicos siguientes conservan el orden y los marcadores que aparecen en la guía del fabricante. Los comandos de ejemplo usan la contraseña por defecto 000000 que figura en los ejemplos públicos.

Notas sobre los marcadores
- {{apn}} es la cadena APN del operador móvil
- {{apnu}} y {{apnp}} son opcionales y representan usuario y contraseña del APN cuando el operador los requiere
- <device_id> en los ejemplos representa el ID de 14 dígitos derivado del IMEI; Plaspy usa el IMEI completo de 15 dígitos para la identificación en la plataforma

1. Comando inicial opcional de restauración de fábrica (marque esto como un paso inicial u opcional)
```
W000000,990,099###
```

2. Establezca el Id del dispositivo. Use los primeros 14 dígitos derivados del IMEI del dispositivo para el campo de ID
```
W000000,010,<14-digit-device-id>
```
- Enfoque de ejemplo: extraiga los primeros 14 dígitos del IMEI y envíelos en lugar de <14-digit-device-id>
- Nota pública de la guía del dispositivo: el equipo usa un ID de 14 dígitos, mientras que Plaspy identifica los dispositivos por el IMEI completo de 15 dígitos

3. Configure el APN del operador móvil. Use el marcador de APN o incluya usuario y contraseña opcionales
```
W000000,011,{{apn}}
```
o, cuando se requiera usuario y contraseña del APN:
```
W000000,011,{{apn}},{{apnu}},{{apnp}}
```

4. Establezca el servidor GPRS hacia Plaspy usando la IP pública y el puerto
```
W000000,012,54.85.159.138,8888
```
- Alternativamente, según las herramientas del proveedor, es posible usar el dominio d.plaspy.com en lugar de la IP

5. Cambie el dispositivo al modo GPRS
```
W000000,013,2
```

6. Configure el intervalo de actualización (el ejemplo usa el código 6 según la lista pública de comandos)
```
W000000,014,6
```
- Ajuste el valor numérico conforme a la documentación del proveedor para la frecuencia de reporte deseada

7. Comando de verificación para solicitar el IMEI al dispositivo
```
W000000,601
```
- Use este comando para confirmar el IMEI del dispositivo al solucionar problemas de identidad o mapeo de ID

Importante: los comandos mostrados usan la contraseña por defecto 000000 en los ejemplos públicos. Si la contraseña de su dispositivo ha sido cambiada, incluya la contraseña correcta en cada comando SMS según el formato exigido por el fabricante.

## Observaciones de configuración

- La configuración por SMS es habitual y soportada en el MT01, aunque también puede existir una herramienta del proveedor o una interfaz de configuración según el paquete y el firmware
- Versiones de firmware y revisiones de hardware pueden cambiar formatos de comandos o parámetros requeridos; confirme siempre la sintaxis con la documentación vigente del fabricante
- Elija UDP o TCP según la preferencia del instalador y el entorno de red; Plaspy aceptará cualquiera de los dos transportes y detectará el protocolo automáticamente
- Utilice los marcadores {{apn}}, {{apnu}}, {{apnp}} exactamente según lo requiera su operador móvil; dejar usuario y contraseña en blanco es válido cuando no se requieren
- Reinicie el dispositivo tras aplicar cambios GPRS/servidor si el fabricante lo recomienda para asegurar que los ajustes entren en vigor

## Por qué usar Plaspy con esta configuración

Configurar el TopShine MT01 para que reporte a Plaspy ofrece a gestores de flotas y operadores visibilidad centralizada de posiciones, eventos y telemetría. El endpoint compartido de Plaspy y la detección automática de protocolo simplifican la incorporación de dispositivos, ya que se utilizan los mismos ajustes de servidor y puerto en los equipos soportados, reduciendo diferencias de configuración por dispositivo.

Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para consultar los comandos más recientes, notas de firmware y detalles del producto MT01 verifique la documentación actual en el sitio web de TopShine https://www.gztopshine.com/ para asegurarse de que los datos coincidan con su revisión de firmware y hardware.
