---
slug: /telic/sbc_avl/configuration
id: sbc_avl-configuration
sidebar_label: Configuration
title: Telic - SBC AVL Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Telic SBC AVL con Plaspy, incluye ajustes de servidor y comandos SMS
keywords:
  - Configuración Telic SBC AVL
  - Configuración Telic SBC AVL Plaspy
  - Configuración rastreador GPS Telic
  - Configuración servidor SBC AVL
  - Configuración rastreador Telic
  - Configuración rastreador Plaspy
  - Rastreo vehicular SBC AVL
  - Configuración gestión de flotas Telic
  - Configuración SMS SBC AVL
  - Configuración GPRS Telic
---

# Telic - Configuración del SBC AVL

Esta página describe el contexto público de configuración para usar el tracker Telic SBC AVL con Plaspy. Reúne los ajustes prácticos de servidor, ejemplos de comandos SMS y el flujo de trabajo habitual que las organizaciones siguen para poner el dispositivo en línea con Plaspy utilizando comandos públicos del fabricante y los detalles de conexión de la plataforma.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del tracker. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por eso esta guía se centra en las acciones públicas y repetibles necesarias para apuntar el SBC AVL al endpoint de Plaspy y confirmar la conectividad.

## Resumen de la configuración

El proceso prepara el SBC AVL para reportar ubicación y estado a Plaspy y verifica que los datos lleguen al endpoint compartido de Plaspy. Cuando esté disponible, el dispositivo puede configurarse mediante comandos SMS para ajustar el APN, la dirección del servidor, el modo de transporte y el comportamiento GPRS.

- Configure el APN del tracker y las credenciales para que pueda conectarse a la red de datos móviles.
- Apunte el dispositivo a Plaspy estableciendo la dirección y el puerto del servidor usados por todos los dispositivos Plaspy.
- Seleccione el modo de transporte UDP o TCP si el firmware del tracker solicita esa opción.
- Habilite el reporte por GPRS para que el dispositivo envíe telemetría a Plaspy.
- Verifique los ajustes y confirme que el tracker aparece en Plaspy después de la configuración.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del tracker

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos soportados e intentará identificar automáticamente el protocolo del tracker una vez que el dispositivo se conecte al endpoint configurado.

## Requisitos típicos antes de la configuración

- Un Telic SBC AVL instalado y con alimentación, con antenas GSM y GPS funcionales.
- Una tarjeta SIM activa con datos móviles y los valores APN del operador.
- Capacidad para enviar mensajes SMS al dispositivo para configuración por SMS, o acceso a la herramienta de configuración del fabricante si está disponible.
- Conocimiento de la contraseña del dispositivo para configuración por SMS; la contraseña pública por defecto en los ejemplos es 123456.
- Acceso a la documentación del fabricante o a herramientas de soporte para instrucciones específicas de firmware y cualquier software requerido.
- Una cuenta en Plaspy y familiaridad básica con cómo se añaden y validan dispositivos en la plataforma Plaspy.

## Cómo se conecta este tracker a Plaspy

Cuando se configura para Plaspy, el SBC AVL reporta posición y datos del dispositivo por GPRS al endpoint y puerto compartidos de Plaspy. Plaspy recibe la conexión del dispositivo, detecta automáticamente el protocolo de comunicación y asocia la alimentación con la cuenta de la plataforma que gestiona el tracker.

- El tracker establece una sesión GPRS usando el APN y las credenciales configuradas.
- Abre una conexión al endpoint de Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Los datos se envían sobre el transporte elegido, UDP o TCP, según la selección del dispositivo.
- Plaspy detecta automáticamente el protocolo del tracker y decodifica la telemetría entrante.
- Una vez que reporta, la ubicación y el estado aparecen en la plataforma Plaspy para monitoreo y operación.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración Telic para el SBC AVL, típicamente comandos SMS o la herramienta de configuración del proveedor, para aplicar cambios.
2. Configure el APN del dispositivo con los valores del operador para que la unidad pueda establecer GPRS.
3. Ingrese la dirección del servidor Plaspy, usando d.plaspy.com o la IP 54.85.159.138 según la interfaz del dispositivo.
4. Establezca el puerto del servidor en 8888, teniendo en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos soportados.
5. Elija UDP o TCP como transporte si el tracker requiere una selección explícita.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware lo exige.
7. Valide que el dispositivo reporte a Plaspy y que la plataforma muestre el tracker como activo.

## Comandos de configuración de ejemplo

El Telic SBC AVL admite configuración por SMS. Los comandos a continuación son ejemplos públicos para configurar el dispositivo por SMS. La configuración de muestra usa la contraseña por defecto 123456. Conserve los marcadores de posición al enviar comandos.

- Reinicio opcional a valores de fábrica (usar solo si necesita restaurar el dispositivo a valores predeterminados):
```text
begin123456
```

- Establecer la zona horaria a UTC+0:
```text
time zone123456 0
```

- Configurar el APN del operador (reemplazar [apn] con el APN de su operador móvil):
```text
apn123456 [apn]
```

- Establecer nombre de usuario y contraseña del APN si el operador lo requiere (reemplazar [apnu] y [apnp]). Incluir solo si su APN requiere autenticación:
```text
up123456 [apnu] [apnp]
```

- Configurar el servidor GPRS para apuntar a Plaspy usando la IP pública y el puerto:
```text
adminip123456 54.85.159.138 8888
```

- Cambiar el dispositivo a modo GPRS para que use datos móviles al enviar reportes. Algunos firmwares aceptan cualquiera de las dos formas:
```text
gprs123456,1,1
```
o
```text
gprs123456
```

- Verificar la configuración actual solicitando un chequeo:
```text
check123456
```

Notas sobre marcadores de posición:
- [apn] — reemplace con la cadena APN de su operador móvil.
- [apnu] — reemplace con el nombre de usuario del APN si el operador lo requiere.
- [apnp] — reemplace con la contraseña del APN si el operador lo requiere.

Estos comandos son ejemplos públicos. Use la contraseña del dispositivo correspondiente a su unidad y verifique los comandos con la documentación del fabricante si tiene dudas.

## Observaciones de configuración

- La configuración por SMS es ampliamente utilizada en dispositivos SBC AVL; asegúrese de que el dispositivo pueda recibir SMS desde el número que está usando.
- Los comandos de ejemplo usan la contraseña pública por defecto 123456; cambie la contraseña después de la configuración si su flujo operativo lo requiere.
- Revisiones de firmware o hardware pueden cambiar el formato de los comandos o los parámetros disponibles. Verifique siempre la documentación Telic para su revisión de hardware.
- Elija UDP o TCP según sus requisitos de red y del dispositivo; Plaspy soporta ambos transportes y detecta el protocolo automáticamente.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos soportados, lo que facilita la configuración del servidor en entornos con varios modelos de trackers.

## Por qué usar Plaspy con esta configuración

Usar el Telic SBC AVL con Plaspy ofrece una forma sencilla de incorporar unidades telemáticas compactas con antena integrada dentro de un flujo operativo de monitoreo de flotas. Al apuntar el dispositivo a Plaspy y verificar la conectividad, las organizaciones obtienen visibilidad centralizada y pueden monitorear la ubicación del vehículo y el estado del dispositivo desde una única plataforma.

Para obtener más información sobre Plaspy y las integraciones soportadas visite https://www.plaspy.com. Para detalles específicos del dispositivo, notas de firmware y referencias adicionales de comandos consulte la documentación del fabricante en https://www.telic.de.
