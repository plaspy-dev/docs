---
slug: /coban/bn_401c/configuration
id: bn_401c-configuration
sidebar_label: Configuration
title: Coban - BN-401C Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para Coban BN-401C y compatibilidad con Plaspy usando ajustes de servidor compartido
keywords:
  - Configuración Coban BN-401C
  - Configuración BN-401C
  - Configuración de rastreador Coban
  - Configuración de servidor Plaspy
  - Configuración de rastreador GPS
  - Configuración de rastreador para motocicleta
  - Configuración BN-401C Plaspy
  - Configuración de rastreo de flotas
  - Integración con plataforma GPS
  - Configuración de dispositivo por SMS
---

# Coban - Configuración BN-401C

Esta página documenta el contexto público de configuración para usar el rastreador Coban BN-401C con Plaspy. Resume los pasos prácticos y los ajustes de servidor compartido necesarios para dirigir los mensajes del BN-401C a Plaspy, y recopila los comandos SMS de configuración comúnmente publicados para este modelo. Use esta guía para preparar el dispositivo y verificar la conectividad antes de incorporar los rastreadores a su cuenta Plaspy.

Plaspy emplea ajustes de servidor compartidos para los equipos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El BN-401C admite configuración por SMS y GPRS y puede configurarse para reportar por TCP o UDP al endpoint de Plaspy mostrado más abajo; siga las instrucciones del fabricante al aplicar comandos y verifique comportamientos específicos del firmware cuando sea necesario.

## Resumen de la configuración

El objetivo de esta configuración es preparar el BN-401C para que reporte de forma fiable posiciones y eventos a Plaspy mediante el endpoint y puerto compartidos. La configuración habitualmente incluye definir el APN y credenciales de la tarjeta, asignar la dirección del servidor Plaspy, elegir el protocolo de transporte y activar un intervalo de reporte apropiado para que Plaspy reciba datos de ubicación y alarmas con oportunidad.

- Configurar el APN del dispositivo y, si corresponde, el usuario y la contraseña del APN para datos GPRS.
- Apuntar el rastreador al endpoint del servidor Plaspy para reportes en tiempo real.
- Seleccionar TCP o UDP como transporte si el firmware exige elección explícita.
- Establecer intervalos de actualización para que los reportes de posición se envíen con la frecuencia requerida.
- Validar la conectividad y confirmar que el dispositivo sea visible en Plaspy tras la configuración.

## Ajustes de servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador para que los dispositivos envíen mensajes específicos de protocolo sin mapeo individual por dispositivo

Tenga en cuenta que Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados y detecta automáticamente el protocolo empleado por cada rastreador.

## Requisitos típicos antes de la configuración

- Una tarjeta SIM con datos y capacidad de SMS activa instalada en el BN-401C y cobertura celular suficiente para GPRS o LTE.
- Conocimiento de los parámetros APN proporcionados por su operador móvil (APN, usuario APN y contraseña APN).
- Acceso a un teléfono con capacidad de enviar SMS o a la herramienta de configuración del fabricante para enviar comandos SMS al dispositivo.
- Alimentación aplicada al rastreador y batería interna de respaldo cargada si va a probarlo sin la alimentación del vehículo.
- La contraseña SMS por defecto del dispositivo si configura por SMS; los ejemplos públicos abajo usan la contraseña 123456.
- Acceso a la documentación oficial de Coban o recursos de soporte para verificar diferencias de firmware.

## Cómo se conecta este rastreador a Plaspy

El BN-401C se configura para enviar posiciones GNSS y mensajes de eventos al endpoint y puerto compartidos de Plaspy. Plaspy ingiere los mensajes del dispositivo por TCP, UDP o SMS y convierte la información de ubicación y alarmas en la plataforma para monitoreo en vivo y generación de reportes.

- El rastreador envía mensajes GPRS al endpoint de Plaspy (d.plaspy.com o 54.85.159.138) en el puerto 8888.
- El transporte puede ser UDP o TCP según el firmware del dispositivo o la preferencia de configuración.
- Plaspy detecta automáticamente el protocolo de los mensajes entrantes y procesa los datos sin necesidad de seleccionar manualmente el protocolo por dispositivo.
- Eventos como SOS, movimiento, cambios en ACC y batería baja se reenvían a Plaspy para alertas y registro histórico.
- Tras la configuración, valide que el BN-401C aparezca en Plaspy y que actualice la posición y el estado.

## Flujo de trabajo de configuración habitual

1. Acceda al método de configuración oficial del fabricante para el BN-401C, normalmente comandos SMS o las herramientas suministradas por Coban.
2. Prepare el APN, el usuario APN y la contraseña APN proporcionados por su operador móvil.
3. Ingrese d.plaspy.com o 54.85.159.138 como la dirección del servidor del dispositivo y establezca el puerto del servidor en 8888.
4. Elija UDP o TCP como transporte si el dispositivo requiere selección de transporte, o deje el valor por defecto si el dispositivo selecciona automáticamente.
5. Aplique o guarde la configuración en el equipo; para la configuración por SMS esto implica enviar los comandos SMS correspondientes.
6. Reinicie el dispositivo si el firmware lo requiere o después de cambios en servidor y APN.
7. Valide que el dispositivo reporte a Plaspy comprobando la conectividad y las últimas actualizaciones de posición en la plataforma.

## Ejemplos de comandos de configuración

El BN-401C puede configurarse mediante comandos SMS. Los comandos a continuación son ejemplos públicos que se han publicado para este modelo. La contraseña por defecto mostrada en estos ejemplos es 123456. Conserve y reemplace los marcadores según se indica.

- Restauración de fábrica (opcional para inicio)
```
begin123456
```

- Establecer la zona horaria a UTC 0
```
time zone123456 0
```

- Configurar el APN del operador (reemplazar [apn] por el APN de su operador)
```
apn123456 [apn]
```

- Establecer usuario y contraseña del APN (reemplazar marcadores según sea necesario)
```
up123456 [apnu] [apnp]
```

- Establecer el servidor GPRS a la IP y puerto de Plaspy
```
adminip123456 54.85.159.138 8888
```
Nota: También puede usar el dominio del servidor en las herramientas del fabricante si lo soportan; el dominio del servidor Plaspy es d.plaspy.com y Plaspy soporta el mismo puerto 8888 para todos los dispositivos.

- Establecer un intervalo regular de actualización de ubicación (patrón de ejemplo)
```
fix060s060s***n123456
```
Explicación: los tokens de temporización exactos dependen del firmware del dispositivo. Consulte la referencia del fabricante para intervalos personalizados.

- Cambiar a modo GPRS y seleccionar transporte (variantes de ejemplo)
```
gprs123456,1,1
```
o
```
gprs123456
```
Explicación: algunas variantes de firmware aceptan un comando gprs compacto; otras versiones requieren parámetros para establecer modo y transporte.

- Verificar configuración actual (comprobación)
```
check123456
```

- Habilitar protocolo extendido o reporte de sensores digitales (ejemplo para mejorar transmisión de sensores digitales)
```
protocol123456 18
```

Marcadores explicados:
- [apn] — la cadena APN de su operador móvil requerida para datos.
- [apnu] — usuario APN si el operador lo requiere.
- [apnp] — contraseña APN si el operador la requiere.

Siempre verifique la sintaxis exacta de los comandos para la versión de firmware de su dispositivo y envíe comandos SMS sólo desde un número de teléfono de confianza.

## Notas de configuración

- Las diferencias de firmware son importantes: la sintaxis de los comandos y los parámetros soportados pueden variar según la revisión de firmware. Confirme la sintaxis con la documentación de Coban para su unidad.
- La configuración por SMS es pública y práctica para instalaciones remotas, pero confirme si su operador bloquea mensajes SMS de configuración o requiere números de remitente específicos.
- TCP versus UDP: elija según sus necesidades de instalación y el soporte del firmware; Plaspy acepta ambos y detecta automáticamente el protocolo en el puerto 8888.
- Tenga presente la contraseña por defecto: los ejemplos públicos usan 123456. Cambie las credenciales por defecto si su flujo de trabajo y firmware lo permiten para mejorar la seguridad operativa.
- Use la herramienta de configuración suministrada por el fabricante o guías de soporte cuando estén disponibles para despliegues grandes o configuración en lote.

## Por qué usar Plaspy con esta configuración

Usar el BN-401C con Plaspy ofrece seguimiento en tiempo real y visibilidad de eventos para flotas de motocicletas y vehículos pequeños de forma sencilla. El dispositivo envía posiciones y mensajes de alarma a Plaspy, donde pueden supervisarse en mapas en vivo, utilizarse para activar alertas e incluirse en reportes históricos para cumplimiento y análisis operativo.

Learn more about how Plaspy handles device ingestion and fleet management at https://www.plaspy.com. Manufacturer specifications, firmware behavior, and device setup methods can change over time, so verify the most current device specific instructions on the Coban website at https://www.coban.net/.
