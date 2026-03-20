---
slug: /topshine/otk02_4g/configuration
id: otk02_4g-configuration
sidebar_label: Configuration
title: TopShine - OTK02-4G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador OBD TopShine OTK02-4G con Plaspy usando servidor compartido y comandos SMS
keywords:
  - Configuración TopShine OTK02-4G
  - Instalación TopShine OTK02-4G
  - TopShine OTK02-4G Plaspy
  - Configuración rastreador GPS OTK02-4G
  - Instalación rastreador OBD TopShine
  - Configuración rastreador Plaspy
  - Instalación seguimiento de vehículos
  - Ajustes de servidor rastreador GPS
  - Configuración rastreador OBD 4G
  - Configuración de servidor OTK02-4G
---

# TopShine - Configuración del OTK02-4G

Esta página documenta el contexto público de configuración para usar el rastreador OBD II TopShine OTK02-4G con Plaspy. Describe los ajustes de servidor prácticos y los comandos SMS más comunes disponibles públicamente para integrar el dispositivo y permitir que reporte ubicación y telemetría OBD en la plataforma Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando se conecta. Los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; siga los comandos públicos que se muestran aquí y confirme cualquier detalle específico del dispositivo con la documentación oficial de TopShine cuando sea necesario.

## Resumen de la configuración

Este proceso prepara el OTK02-4G para comunicarse con Plaspy configurando el APN de la red, el endpoint del servidor GPRS y la identificación del dispositivo para que Plaspy pueda ingerir posiciones y telemetría OBD. El modelo soporta métodos de configuración por SMS y datos móviles, comúnmente usados para instalaciones OBD plug and play rápidas.

- Configure la identificación del dispositivo para que Plaspy reconozca la instancia del rastreador y la vincule con el IMEI.
- Establezca los detalles del APN del operador móvil para que el rastreador pueda enviar datos GPRS.
- Apunte el dispositivo al endpoint y puerto del servidor Plaspy para que los mensajes lleguen a la plataforma.
- Active el modo GPRS y verifique los intervalos de reporte para que el dispositivo transmita periódicamente a Plaspy.
- Valide la conectividad y la transmisión del dispositivo en el panel de Plaspy después de aplicar los ajustes.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com para configuración basada en DNS cuando el dispositivo lo soporte
- IP del servidor: 54.85.159.138 para configuración por IP directa
- Puerto: 8888 puerto compartido usado por Plaspy para todos los dispositivos compatibles
- Transporte: soporte para UDP o TCP; elija el transporte que el firmware del dispositivo soporte
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos típicos antes de la configuración

- Puerto OBD II del vehículo alimentado listo para la instalación plug and play del OTK02-4G
- SIM activa con datos habilitados y los detalles APN correctos del operador móvil
- Acceso a un teléfono con capacidad SMS o una herramienta de configuración si el dispositivo se configura por SMS
- IMEI del dispositivo disponible para identificación y comandos de registro
- Instrucciones de configuración del fabricante o acceso al método de configuración TopShine
- Una cuenta en Plaspy para validar que el dispositivo sea visible y esté reportando después de la configuración

## Cómo se conecta este rastreador a Plaspy

El OTK02-4G envía posiciones GNSS y telemetría obtenida por OBD a Plaspy usando datos móviles o SMS, según lo soportado por el dispositivo y la red. El dispositivo se configura para enviar su telemetría al endpoint y puerto compartidos de Plaspy, de modo que la plataforma pueda ingerir posiciones, eventos y diagnósticos para monitoreo en tiempo real y reproducción histórica.

- El rastreador envía actualizaciones periódicas de ubicación y telemetría OBD al endpoint de Plaspy en 54.85.159.138 puerto 8888
- Si el firmware del dispositivo soporta nombres de dominio, se puede apuntar a d.plaspy.com en lugar de la IP
- Plaspy recibe eventos y telemetría y detecta automáticamente el protocolo del rastreador para su análisis
- Las alarmas y eventos OBD se reenvían a la plataforma Plaspy para paneles y alertas
- Los datos de registro offline se cargan cuando el rastreador recupera conectividad de red, de modo que Plaspy mantiene el historial

## Flujo típico de configuración

1. Acceda al método oficial de configuración de TopShine descrito por el fabricante, normalmente comandos SMS o una herramienta OEM.
2. Ingrese el endpoint del servidor Plaspy usando d.plaspy.com o 54.85.159.138 según lo que soporte el dispositivo.
3. Configure el puerto 8888, que es el puerto compartido de Plaspy para todos los dispositivos.
4. Elija UDP o TCP si el dispositivo requiere seleccionar un protocolo de transporte.
5. Establezca el APN del operador, usuario y contraseña si lo exige el operador de la SIM.
6. Aplique o guarde la configuración y reinicie el dispositivo si es necesario para que los cambios se apliquen.
7. Valide que el dispositivo reporte en Plaspy comprobando la presencia del equipo y los eventos de posición recientes en la plataforma.

## Comandos de configuración de ejemplo

El TopShine OTK02-4G acepta comandos de configuración por SMS. Los comandos públicos de ejemplo a continuación usan la contraseña predeterminada del dispositivo 000000. Reemplace los marcadores y valores derivados del IMEI según se indique.

- Restauración de fábrica (opcional para configuración inicial o si se requiere un reinicio)
```
W000000,990,099###
```
Nota: Este es el estilo de comando público para restauración a valores de fábrica que aparece en los ejemplos de configuración de TopShine. Úselo solo cuando pretenda restablecer a los valores predeterminados.

- Establecer el ID del dispositivo (use los primeros 14 dígitos derivados del IMEI)
```
W000000,010,<14_digit_device_id>
```
Explicación: Establece el ID del equipo usando los primeros 14 dígitos derivados del IMEI. Plaspy utiliza el IMEI completo de 15 dígitos como identificador en la plataforma, así que asegúrese de conocer el IMEI al registrar o validar el dispositivo.

- Configurar el APN del operador (use los valores de su operador; usuario y contraseña opcionales)
```
W000000,011,{{apn}}{{,{{apnu}},{{apnp}}}}
```
Explicación: {{apn}} es el APN del operador móvil. Si su operador requiere usuario y contraseña, incluya {{apnu}} y {{apnp}} respectivamente. Mantenga los marcadores según sea necesario para la configuración de su SIM.

- Configurar el servidor GPRS a Plaspy usando la IP y el puerto proporcionados
```
W000000,012,54.85.159.138,8888
```
Nota: El ejemplo anterior usa la IP del servidor Plaspy y el puerto compartido 8888. Si el dispositivo soporta nombres de dominio, puede usar d.plaspy.com en lugar de la IP.

- Cambiar el rastreador a modo GPRS
```
W000000,013,2
```

- Establecer el intervalo de actualización (valor de ejemplo mostrado)
```
W000000,014,6
```
Explicación: El valor numérico final controla el intervalo de reporte según la referencia de comandos del dispositivo. Use el valor adecuado para su política de reporte.

- Consultar IMEI (comando de verificación)
```
W000000,601
```
Explicación: Use este comando para solicitar el IMEI del dispositivo por SMS si no lo tiene impreso en el equipo o el empaque.

## Notas sobre la configuración

- Las variaciones de firmware pueden cambiar la sintaxis exacta de los comandos SMS o los parámetros disponibles; confirme siempre con las notas de la versión del firmware.
- El OTK02-4G admite comandos por SMS y rutas de reporte GPRS; use SMS para la provisión inicial cuando sea posible.
- Elija UDP o TCP según las opciones del firmware del dispositivo y sus necesidades de red; Plaspy acepta ambos transportes y detecta automáticamente el protocolo.
- La plataforma Plaspy utiliza el mismo puerto 8888 para todos los dispositivos, por lo que debe usarse ese puerto al configurar el rastreador.
- Verifique el APN del operador, usuario y contraseña antes de cambiar a modo GPRS para evitar interrupciones de conectividad.

## Por qué usar Plaspy con esta configuración

Usar el TopShine OTK02-4G con Plaspy permite un despliegue rápido y sin complicaciones para seguimiento de vehículos y telemetría OBD. La forma plug and play en factor OBD II simplifica las instalaciones, mientras que la posibilidad de configurar el dispositivo por SMS o GPRS y apuntarlo a Plaspy garantiza que los equipos se vuelvan visibles rápidamente en paneles de flota y flujos de alertas.

Para obtener más información sobre Plaspy y cómo la plataforma ingiere y muestra la telemetría de dispositivos visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo más actuales, comportamiento de firmware y documentación del fabricante, verifique los detalles en el sitio oficial de TopShine https://www.gztopshine.com/ antes de aplicar cambios.
