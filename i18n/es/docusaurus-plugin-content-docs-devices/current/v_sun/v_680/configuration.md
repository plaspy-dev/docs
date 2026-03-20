---
slug: /v_sun/v_680/configuration
id: v_680-configuration
sidebar_label: Configuration
title: V-SUN - V-680 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del V-SUN V-680 y cómo apuntarlo a los servidores de Plaspy para rastreo
keywords:
  - Configuración V SUN V 680
  - Instalación V SUN V 680
  - Configuración servidor V SUN V 680
  - Comandos SMS V SUN V 680
  - Configuración dispositivo Plaspy
  - Configuración rastreador GPS Plaspy
  - Configuración APN rastreador GPS
  - Configuración seguimiento vehicular
  - Ajustes servidor GPRS rastreador
  - Configuración plataforma V SUN V 680 Plaspy
---

# V-SUN - V-680 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador V-SUN V-680 con Plaspy. Resume los pasos prácticos y los comandos SMS públicos que permiten apuntar el dispositivo a los puntos finales de servidor de Plaspy para que el rastreador informe ubicación y estado a la plataforma. Utilice esta guía como punto de partida práctico para configurar un V-680 compatible con Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y las herramientas del proveedor. El V-680 admite configuración vía SMS en su conjunto de comandos públicos y la contraseña por defecto que aparece en los ejemplos abajo es 0000, salvo que el propietario del dispositivo la haya cambiado.

## Resumen de configuración

Este proceso prepara al V-SUN V-680 para comunicarse con Plaspy actualizando los ajustes de red, el punto final del servidor, los intervalos de reporte y los modos de operación. Los comandos SMS públicos que se muestran a continuación ilustran las acciones mínimas necesarias para registrar el rastreador en Plaspy y comenzar a enviar reportes.

- Configure el APN del dispositivo para que pueda usar la red de datos móviles y alcanzar Plaspy.
- Apunte el servidor GPRS del equipo al endpoint de Plaspy para que los paquetes de ubicación lleguen a la plataforma.
- Ajuste los intervalos de reporte para que el dispositivo envíe actualizaciones mientras se mueve y cuando está detenido.
- Habilite los modos de reporte GPRS y GPS para que el rastreador envíe datos por la red.
- Opcionalmente, realice un restablecimiento de fábrica al preparar un dispositivo sin configurar.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com para configuración basada en dominio
- IP del servidor 54.85.159.138 para configuración por IP
- Puerto 8888 que es el puerto compartido usado por Plaspy para todos los dispositivos
- Transporte soportado mediante UDP o TCP según la selección del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo se conecta

## Requisitos típicos previos a la configuración

- Una tarjeta SIM activa con datos habilitados y capacidad de SMS colocada en el V-680
- Alimentación del dispositivo y acceso al número del rastreador para la configuración por SMS
- Conocimiento del APN del operador móvil; en la guía se usan los marcadores {{apn}}, {{apnu}} y {{apnp}}
- Acceso al método de configuración por SMS del fabricante o a la herramienta oficial de configuración
- La contraseña del dispositivo si se ha cambiado respecto al valor por defecto 0000

## Cómo se conecta este rastreador a Plaspy

El V-680 se configura para enviar ubicación y eventos del dispositivo a un único endpoint y puerto de Plaspy, de modo que la plataforma pueda recibir y mostrar los datos de rastreo. La configuración ajusta el APN de red, la dirección del servidor GPRS y los intervalos de reporte para que el dispositivo envíe paquetes a Plaspy mediante datos móviles.

- El rastreador usa datos GPRS para enviar mensajes de posición y estado al endpoint de Plaspy
- El dispositivo puede apuntarse a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888
- Plaspy acepta conexiones en el puerto 8888 para todos los rastreadores compatibles y detecta automáticamente el protocolo del dispositivo
- El transporte puede configurarse como UDP o TCP en el dispositivo si el firmware lo requiere
- Se puede usar SMS para actualizar ajustes o verificar la configuración cuando los datos aún no están disponibles

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial del fabricante, como comandos SMS o la herramienta del proveedor para el V-680.
2. Confirme o ingrese el endpoint del servidor estableciendo d.plaspy.com o 54.85.159.138 en el dispositivo.
3. Configure el puerto en 8888 para que coincida con la configuración del servidor de Plaspy usada en todos los dispositivos.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte para los reportes GPRS.
5. Aplique o guarde la configuración mediante el método del dispositivo y envíe los SMS necesarios.
6. Reinicie el dispositivo o corte alimentación si el firmware lo exige para activar los nuevos ajustes de red.
7. Verifique que el dispositivo reporte a Plaspy comprobando el estado en línea en la plataforma una vez que se transmitan datos.

## Comandos de configuración de ejemplo

El V-680 soporta configuración mediante SMS. Los comandos de ejemplo públicos a continuación se presentan en el orden publicado para una configuración básica. La contraseña por defecto del dispositivo en estos comandos es 0000. Conserve los marcadores al sustituir los valores de su operador.

1. Restablecimiento de fábrica inicial opcional
```
*RESET#0000##
```
2. Configure el APN del operador. Reemplace {{apn}} por el APN de su operador. Si su APN requiere usuario o contraseña, incluya {{apnu}} y {{apnp}} respectivamente. Los segmentos con marcadores son opcionales según el operador.
```
#803#0000#{{apn}}#{{apnu}}#{{apnp}}#
```
3. Configure el servidor GPRS usando la IP y el puerto de Plaspy. Este comando usa la IP 54.85.159.138 y el puerto 8888 mostrados en esta guía.
```
#804#0000#54.85.159.138#8888##
```
4. Configure el intervalo de actualización en movimiento. Este ejemplo público establece el parámetro según el conjunto original de comandos.
```
#805#0000#120#1##
```
5. Configure el intervalo de actualización en reposo. Este ejemplo público establece el parámetro según el conjunto original de comandos.
```
#809#0000#120#1##
```
6. Habilite el modo GPRS para que el rastreador use datos móviles para reportes
```
7100000
```
7. Habilite el modo GPS para que el rastreador obtenga datos de posicionamiento
```
2220000
```

Notas sobre los marcadores de posición
- {{apn}} es el Access Point Name del operador móvil necesario para datos GPRS.
- {{apnu}} y {{apnp}} son el usuario y la contraseña del APN, opcionales si su operador los requiere.
- Reemplace la contraseña por defecto 0000 si la contraseña del dispositivo ha sido cambiada.

## Notas de configuración

- La sintaxis de comandos SMS y el firmware del fabricante pueden cambiar entre versiones y revisiones de hardware; confirme siempre con la documentación actual de V-SUN.
- El rastreador acepta tanto dominio como IP para la configuración del servidor; Plaspy admite d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Elija UDP o TCP según las opciones de firmware del dispositivo y las consideraciones de red; Plaspy detectará automáticamente el protocolo cuando el dispositivo se conecte.
- La configuración vía SMS es un método frecuente para la puesta en marcha del V-680; tenga a mano el número del dispositivo y la contraseña.
- Aplique y guarde los ajustes, luego reinicie el dispositivo si los cambios no parecen surtir efecto de inmediato.

## Por qué usar Plaspy con esta configuración

Apuntar el V-SUN V-680 a Plaspy ofrece una forma directa de integrar el dispositivo en un flujo de trabajo de gestión de flotas o activos. Con el endpoint y el puerto compartidos que usa Plaspy, la configuración es consistente entre rastreadores compatibles, lo que simplifica el despliegue y la gestión continua de dispositivos. Apuntar el V-680 a Plaspy habilita visibilidad continua, reporte de eventos y supervisión operativa centralizada a través de la plataforma.

Learn more about Plaspy on the main website https://www.plaspy.com. For the latest V-680 specific instructions, firmware notes, and official command references verify device details on the manufacturer site http://www.v-sun.cc/ since manufacturer setup methods and firmware behavior can change over time.
