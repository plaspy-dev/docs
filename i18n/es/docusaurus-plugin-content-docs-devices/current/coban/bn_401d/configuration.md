---
slug: /coban/bn_401d/configuration
id: bn_401d-configuration
sidebar_label: Configuration
title: Coban - BN-401D Configuration
sidebar_class_name: menu_item_tracker
description: Configuración del Coban BN-401D y datos de servidor para rastreo y alertas compatibles con Plaspy
keywords:
  - configuración Coban BN-401D
  - configuración BN-401D Plaspy
  - configuración rastreador Coban
  - configuración servidor BN-401D
  - configuración GPS para motocicleta
  - configuración dispositivo Plaspy
  - comandos SMS rastreador GPS
  - ajustes APN BN-401D
  - configuración rastreo de vehículos
  - configuración plataforma GPS Coban
---

# Coban - BN-401D Configuración

Esta página describe el contexto público de configuración para usar el Coban BN-401D con la plataforma Plaspy. Se enfoca en los pasos prácticos y los ajustes públicos que debe aplicar en el dispositivo para que envíe ubicación, alarmas y telemetría a Plaspy para monitoreo y reproducción. La guía está basada en la descripción del BN-401D y en los comandos de configuración por SMS disponibles públicamente para este modelo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos de configuración por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor. El BN-401D soporta configuración por SMS y reporte por GPRS y puede configurarse para usar UDP o TCP en el puerto del servidor Plaspy que se indica más abajo. Siempre confirme el comportamiento del dispositivo contra la documentación del fabricante si tiene dudas.

## Resumen de la configuración

Este proceso prepara el BN-401D para comunicarse de forma confiable con Plaspy, verifica la conectividad y asegura que el equipo sea visible en el panel de Plaspy. Los comandos públicos por SMS del BN-401D permiten ajustar APN, punto de envío, modo de transporte e intervalos de reporte desde un teléfono móvil o una herramienta de instalación que envíe SMS al dispositivo.

- Envíe APN y datos de autenticación para que el rastreador se registre en la red de datos móviles.
- Configure el endpoint y puerto del servidor Plaspy para que el dispositivo reenvíe la telemetría a Plaspy.
- Seleccione UDP o TCP como transporte y active el reporte por GPRS para actualizaciones constantes.
- Verifique la contraseña del dispositivo y revise la configuración para confirmar el registro y el flujo de telemetría.
- Valide que las ubicaciones, alarmas y actualizaciones de estado aparezcan en Plaspy después de la configuración.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte: UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de la configuración

- Un BN-401D instalado y con alimentación, con acceso a su interfaz de configuración por SMS o a la herramienta del instalador.
- Una SIM activa con datos habilitados y las credenciales APN correctas del operador móvil.
- Un teléfono o servicio SMS capaz de enviar comandos de configuración al dispositivo.
- Conocimiento de la contraseña del equipo (la contraseña pública por defecto que se muestra en los comandos a continuación es 123456 a menos que se haya cambiado).
- Verificación básica de cableado y alimentación para que el rastreador tenga una alimentación vehicular estable de 12 V a 24 V durante la configuración.
- Acceso a la documentación del fabricante o a la guía del proveedor para notas específicas de hardware y conexionado.

## Cómo se conecta este rastreador a Plaspy

El BN-401D se configura para enviar posiciones GPS, eventos de alarma y estado del dispositivo al endpoint del servidor Plaspy para que la plataforma muestre posiciones en vivo, reproduzca recorridos y dispare alertas. Use el endpoint y puerto compartidos de Plaspy para que la plataforma pueda ingerir y detectar automáticamente el protocolo del rastreador para su procesamiento.

- El rastreador se ajusta para reportar al dominio o IP del servidor Plaspy y al puerto para entrega por GPRS.
- Las alarmas del dispositivo como SOS, impacto y eventos de alimentación se reenvían a Plaspy como mensajes de evento.
- Las actualizaciones de posición se transmiten en los intervalos configurados para que Plaspy muestre la ubicación en tiempo real y el historial de recorridos.
- Plaspy recibe información del estado del equipo para monitorear batería y alimentación externa.
- La plataforma detecta el protocolo del rastreador automáticamente una vez que el equipo se conecta al endpoint del servidor Plaspy.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial del fabricante o a las instrucciones de instalación por SMS provistas por Coban o su proveedor.
2. Asegúrese de que el BN-401D esté alimentado, que la SIM esté insertada y que tenga a mano el APN y las credenciales del operador.
3. Introduzca en la configuración del equipo el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138.
4. Ajuste el puerto del servidor a 8888 y seleccione UDP o TCP si el equipo requiere escoger el transporte.
5. Aplique o guarde la configuración y, si es necesario, envíe los comandos SMS para activar el reporte por GPRS.
6. Reinicie el dispositivo si el fabricante lo indica o después de cambios importantes en la configuración.
7. Valide que el equipo reporte a Plaspy y que posiciones y eventos aparezcan en la plataforma.

## Comandos de configuración de ejemplo

El BN-401D soporta comandos de configuración por SMS. Los ejemplos públicos que siguen usan la contraseña por defecto del dispositivo 123456. Preserve los marcadores de posición {{apn}}, {{apnu}} y {{apnp}} al sustituir los valores de su operadora móvil.

- Reinicio de fábrica opcional inicial (usar solo si es necesario)
```text
begin123456
```

- Ajustar la zona horaria a UTC 0
```text
time zone123456 0
```

- Configurar el APN del operador (reemplazar {{apn}} por el APN de su operador)
```text
apn123456 {{apn}}
```

- Establecer usuario y contraseña del APN (reemplazar {{apnu}} y {{apnp}} con las credenciales del operador)
```text
up123456 {{apnu}} {{apnp}}
```

- Establecer el servidor GPRS a la IP y puerto de Plaspy
```text
adminip123456 54.85.159.138 8888
```

- Ejemplo de intervalo de reporte (comando típico de este modelo para programar fixes periódicos)
```text
fix060s060s***n123456
```

- Cambiar a modo GPRS y elegir transporte (opciones de ejemplo)
```text
gprs123456,1,1
```
o una variante más simple
```text
gprs123456
```

- Comprobar ajustes actuales del dispositivo
```text
check123456
```

- Habilitar protocolo extendido o reporte extra de sensores para un estado digital mejorado
```text
protocol123456 18
```

Notas sobre marcadores de posición y comandos
- {{apn}} es la cadena APN del operador móvil requerida para la conectividad de datos.
- {{apnu}} y {{apnp}} son el nombre de usuario y la contraseña del APN cuando el operador exige autenticación; muchos operadores usan valores vacíos.
- El comando adminip de ejemplo arriba configura el dispositivo para reportar a la IP del servidor Plaspy 54.85.159.138 en el puerto 8888. Alternativamente puede usar el dominio d.plaspy.com si su equipo resuelve nombres de dominio vía DNS.

## Observaciones de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos o las opciones disponibles; verifique los comandos contra el firmware instalado en su equipo.
- TCP versus UDP: elija el transporte que mejor se adapte a su red y preferencia de instalación. Plaspy acepta ambos y detectará el protocolo automáticamente cuando el dispositivo se conecte.
- La configuración por SMS está soportada en el BN-401D pero puede sustituirse por una herramienta de instalador o software de configuración proporcionado por Coban o distribuidores.
- Mantenga la contraseña del dispositivo segura; la contraseña pública por defecto en los ejemplos es 123456 y debería cambiarse en producción si el equipo lo permite.
- Siempre confirme los datos APN con el operador móvil para asegurar que el dispositivo pueda establecer conexiones de datos.

## Por qué usar Plaspy con esta configuración

Usar el BN-401D con Plaspy ofrece una forma práctica de centralizar el monitoreo de ubicación, alarmas y estado del dispositivo en motos y vehículos pequeños. El diseño del BN-401D con preferencia LTE y retroceso a 2G, junto con la posibilidad de configurar reportes vía SMS o GPRS, lo hace adecuado para instalaciones ocultas y escenarios de flota donde la telemetría remota y controles de inmovilizador son valiosos.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device specific configuration methods, firmware behavior, and manufacturer instructions at the official Coban website https://www.coban.net/ to ensure your setup matches current product documentation.
