---
slug: /istartek/pt28/configuration
id: pt28-configuration
sidebar_label: Configuration
title: iStartek - PT28 Configuration
sidebar_class_name: menu_item_tracker
description: Configure iStartek PT28 para Plaspy usando ajustes de servidor público y comandos SMS para seguimiento personal en tiempo real
keywords:
- configuración iStartek PT28
- configuración PT28
- configuración PT28 Plaspy
- configuración servidor PT28
- configuración rastreador GPS PT28
- rastreador iStartek Plaspy
- configuración SMS PT28
- ajustes APN PT28
- configuración rastreador GPS personal
- configuración rastreador GPS vestible
---

# iStartek - Configuración del PT28

Esta página documenta el contexto público de configuración para usar el iStartek PT28 con la plataforma Plaspy. Se centra en los ajustes de servidor y los pasos prácticos de configuración publicados para el PT28, de modo que usted pueda preparar el dispositivo para enviar ubicación y eventos a Plaspy y así habilitar monitoreo, alertas e historial.

Plaspy usa ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. El PT28 admite comandos de configuración por SMS, ajustes de APN y servidor GPRS; los ejemplos a continuación usan los comandos SMS públicos proporcionados por el fabricante como método principal de configuración.

## Resumen de configuración

Configurar el PT28 para Plaspy prepara el dispositivo vestible para enviar datos de ubicación y eventos a la plataforma usando el punto de conexión y puerto compartidos de Plaspy. La secuencia de configuración normalmente incluye ajustar la zona horaria del dispositivo, el APN para datos móviles y la dirección y puerto del servidor GPRS. Para el PT28 el fabricante publica comandos SMS capaces de realizar cada una de estas tareas.

- Direccione el dispositivo al punto de conexión de Plaspy para que los mensajes de posición, SOS y telemetría lleguen a Plaspy.
- Proporcione un APN correcto para que el dispositivo pueda conectarse a la red de datos del operador móvil.
- Establezca un intervalo de reporte adecuado para que el PT28 transmita actualizaciones con la frecuencia deseada a Plaspy.
- Verifique los ajustes usando el comando de consulta de parámetros y confirme que el dispositivo aparece en Plaspy.
- Use comandos SMS cuando no haya disponible una herramienta de configuración directa o cuando se requiera configuración remota.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte: el dispositivo puede configurarse usando UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de la configuración

- Un PT28 cargado con una tarjeta SIM activa instalada y con permisos de voz/datos según lo requerido por el operador
- Detalles del APN del operador para la tarjeta SIM, necesarios para habilitar acceso de datos GPRS
- Capacidad para enviar y recibir SMS desde el dispositivo para la configuración basada en SMS
- Acceso al método de configuración del fabricante o a la documentación de comandos SMS del PT28
- Una cuenta en Plaspy y el paso de registro del dispositivo en Plaspy para vincular el dispositivo a su instancia de monitoreo

## Cómo se conecta este rastreador a Plaspy

El PT28 se configura para entregar sus mensajes de ubicación, evento y telemetría al punto de conexión y puerto compartidos de Plaspy, de modo que Plaspy pueda ingerir y mostrar los datos de seguimiento. Una vez aplicados los ajustes de servidor y APN, el dispositivo enviará actualizaciones periódicas y notificaciones de eventos a Plaspy para monitoreo en tiempo real e informes históricos.

- El dispositivo envía actualizaciones de posición a d.plaspy.com o 54.85.159.138 usando el puerto 8888
- Plaspy recibe los mensajes entrantes y detecta automáticamente el protocolo del rastreador
- Las actualizaciones de ubicación, eventos SOS y la telemetría disponible se vuelven visibles dentro de la plataforma Plaspy
- Se utiliza un reporte periódico basado en temporizador para controlar la frecuencia de actualizaciones hacia Plaspy
- Verificar que el dispositivo informa a Plaspy confirma que los ajustes de APN y servidor son correctos

## Flujo de configuración habitual

1. Confirme que el dispositivo está encendido, tiene una SIM funcional con plan de datos y puede enviar y recibir SMS.
2. Acceda al método de configuración del fabricante para el PT28. En muchos despliegues este método es la configuración por SMS publicada por el fabricante.
3. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 en los ajustes de servidor del dispositivo.
4. Establezca el puerto en 8888. Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles.
5. Elija UDP o TCP en el dispositivo si se requiere selección de transporte por parte del equipo.
6. Aplique o guarde la configuración y reinicie el dispositivo si lo exige el firmware.
7. Valide que el dispositivo informa a Plaspy y use el comando de verificación de parámetros para confirmar los ajustes de servidor y APN.

## Comandos de configuración de ejemplo

El fabricante del PT28 proporciona comandos SMS para realizar tareas de configuración comunes. A continuación están los comandos SMS públicos en el orden que suele emplearse. Envíe estos comandos como mensajes SMS al número de teléfono del dispositivo.

- Reinicio opcional a configuración de fábrica (usar solo cuando sea necesario durante resolución de problemas o aprovisionamiento inicial):

```
FACTORY#
```

- Establecer la zona horaria a UTC 0:

```
GMT,E,0#
```

- Establecer el APN del operador. Reemplace los valores de plantilla por el APN del operador y el nombre de usuario y contraseña opcionales:

```
APN,[apn]# 
```

Si su operador requiere usuario y contraseña, inclúyalos si están disponibles:

```
APN,[apn],[apnu],[apnp]#
```

(Explicación: [apn] es el Access Point Name del operador. [apnu] y [apnp] son marcadores opcionales para usuario y contraseña del APN.)

- Configurar el servidor GPRS para usar el dominio de Plaspy (preferido por legibilidad):

```
SERVER,1,d.plaspy.com,8888#
```

- Alternativamente configurar el servidor GPRS para usar la IP de Plaspy:

```
SERVER,0,54.85.159.138,8888#
```

(Explicación: el fabricante ofrece ambos formatos, dominio e IP. Ambos apuntan a Plaspy; usar el dominio facilita cambios futuros basados en DNS.)

- Establecer el intervalo de actualización periódico a 60 segundos:

```
TIMER,60#
```

- Verificar los parámetros actuales en el dispositivo:

```
PARAM#
```

Envíe los comandos en el orden mostrado al realizar una configuración inicial: APN, SERVER, TIMER y luego verifique con PARAM#. Use FACTORY# solo cuando necesite restablecer a valores de fábrica.

## Notas de configuración

- La configuración por SMS está publicada por el fabricante y es útil para instalaciones remotas o en campo cuando no hay disponible conexión USB o software de configuración directo.
- Revisiones de firmware y hardware pueden cambiar qué comandos SMS son compatibles o la sintaxis requerida; confirme siempre con la documentación del fabricante del PT28.
- Elija el dominio d.plaspy.com cuando sea posible para que DNS gestione cambios de IP en el backend; la IP 54.85.159.138 se ofrece como alternativa directa.
- Seleccione UDP o TCP según cualquier requisito del dispositivo; Plaspy soporta ambos transportes y detecta automáticamente el protocolo.
- Confirme el APN y la conectividad de datos antes de dar por concluida la configuración; PARAM# es útil para verificar los ajustes aplicados.

## Por qué usar Plaspy con esta configuración

Usar el PT28 con Plaspy ofrece a cuidadores y operadores una forma sencilla de recopilar ubicación en tiempo real, alertas SOS y telemetría del vestible dentro de una sola plataforma de monitoreo. Los comandos SMS publicados y los ajustes de servidor compartidos de Plaspy facilitan el aprovisionamiento consistente de múltiples dispositivos y permiten confirmar que informan correctamente a Plaspy para seguimiento en vivo y revisión histórica.

Para saber más sobre Plaspy y sus funcionalidades visite https://www.plaspy.com. Para detalles específicos de configuración más actuales, comportamiento de firmware e instrucciones del fabricante, verifique la información en el sitio oficial de iStartek en https://istartek.com/.
