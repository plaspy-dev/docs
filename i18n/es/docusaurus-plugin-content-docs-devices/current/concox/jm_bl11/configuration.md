---
slug: /concox/jm_bl11/configuration
id: jm_bl11-configuration
sidebar_label: Configuration
title: Concox - JM-BL11 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Concox JM-BL11 con Plaspy, incluye ajustes de servidor compartido y comandos SMS
keywords:
  - configuración Concox JM-BL11
  - instalación Concox JM-BL11
  - JM-BL11 Plaspy
  - configuración servidor Plaspy
  - configuración rastreador Concox
  - ajustes servidor JM-BL11
  - configuración rastreador GPS
  - configuración GPS para candado de bicicleta
  - rastreo micromovilidad
  - rastreador gestión de flotas
---

# Concox - JM-BL11 Configuración

Esta página documenta el contexto público de configuración para usar el Concox JM-BL11 con Plaspy. Reúne los ajustes de servidor prácticos y los comandos de configuración por SMS disponibles públicamente que se usan para preparar unidades JM-BL11 para comunicarse con la plataforma Plaspy. Utilice esta guía para entender los ajustes compartidos que usa Plaspy y cómo se aplican en el dispositivo.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que considere los comandos SMS y los flujos de trabajo aquí como una guía práctica pública y no como un reemplazo de la documentación oficial de Concox.

## Resumen de la configuración

Este proceso prepara un JM-BL11 para reportar de forma confiable a Plaspy configurando el APN de red, el punto de conexión del servidor Plaspy, los intervalos de reporte y habilitando la modalidad GPRS/SMS cuando corresponda. Los comandos de ejemplo que aparecen abajo muestran un flujo de trabajo común basado en SMS que se usa con dispositivos Concox para aplicar estos valores.

- Configure el APN del dispositivo y las credenciales opcionales para que establezca conectividad de datos GPRS o LTE.
- Apunte el rastreador al endpoint del servidor Plaspy para que la telemetría y la ubicación lleguen a la plataforma.
- Ajuste los intervalos de reporte para controlar la frecuencia con la que se transmiten los datos GNSS y los eventos a Plaspy.
- Habilite el modo de datos GPRS para que el dispositivo pueda enviar información a Plaspy a través de la red móvil.
- Verifique los ajustes actuales con un comando de lectura para confirmar que el equipo reporta a Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte por UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Estos ajustes compartidos se usan en los dispositivos compatibles con Plaspy y deben ingresarse en el rastreador o mediante el método oficial de configuración Concox para que el JM-BL11 pueda entregar telemetría a la plataforma Plaspy.

## Requisitos típicos antes de la configuración

- Una unidad JM-BL11 alimentada y accesible con batería suficiente o conectada a alimentación para la configuración.
- Una tarjeta SIM válida instalada y un plan de datos activo con el APN correcto para su operador móvil.
- Medios para enviar comandos SMS al dispositivo o acceso a la herramienta de configuración Concox que soporte JM-BL11.
- Conocimiento del APN de su operador y, si aplica, el nombre de usuario y la contraseña del APN.
- Cobertura de red para LTE Cat M1 / NB2 o modos de datos de respaldo necesarios para que el dispositivo alcance Plaspy.
- Permisos para cambiar ajustes del dispositivo y, si es necesario, reiniciarlo después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura con el endpoint de Plaspy, el JM-BL11 envía fijaciones GNSS, notificaciones de eventos y telemetría al servidor y puerto compartidos de Plaspy. Plaspy ingesta estos mensajes, identifica el protocolo del rastreador automáticamente y pone los datos a disposición en mapas en vivo, alertas y paneles de gestión de flotas.

- El dispositivo reporta ubicación y fijaciones GNSS al endpoint del servidor Plaspy.
- Datos de eventos como movimiento, alertas de manipulación, batería y telemetría de sensores se envían a Plaspy para su monitoreo.
- La comunicación se establece con el endpoint compartido de Plaspy usando el transporte configurado (UDP o TCP) en el mismo puerto que Plaspy utiliza para todos los dispositivos.
- Plaspy detecta automáticamente el protocolo del rastreador para que los equipos con protocolos compatibles aparezcan correctamente en la plataforma una vez que se conectan.
- Los intervalos regulares de reporte controlan con qué frecuencia se transmite la información a Plaspy para visibilidad en tiempo real.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración Concox para el JM-BL11, ya sea la interfaz de comandos por SMS del fabricante o la herramienta de configuración Concox.
2. Prepare y confirme su APN de operador y cualquier usuario o contraseña del APN que vaya a usar durante la configuración.
3. Introduzca el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes del dispositivo.
4. Configure el puerto del servidor a 8888 y seleccione UDP o TCP si el dispositivo solicita elegir el transporte.
5. Aplique o guarde la configuración en el dispositivo y habilite el modo GPRS/datos si es necesario.
6. Reinicie el dispositivo cuando se solicite o después de la configuración para asegurar que los nuevos ajustes entren en efecto.
7. Valide que el JM-BL11 reporta a Plaspy confirmando que el dispositivo aparece y envía datos en la plataforma o usando el comando de verificación del equipo.

## Ejemplos de comandos de configuración

Para configurar el rastreador, envíe los siguientes comandos SMS en secuencia. Los comandos se muestran en el orden que comúnmente se usa durante la configuración inicial. El comando de restablecimiento es opcional y solo es necesario si desea restaurar los valores de fábrica antes de configurar.

- Restablecimiento opcional a valores de fábrica (solo si necesita restaurar los valores predeterminados)
```text
FACTORY#
```

- Ajustar la zona horaria a UTC+0
```text
GMT,E,0#
```

- Establecer el APN del operador
```text
APN,{{apn}}#
```
Si su APN requiere usuario y contraseña, incluya los campos opcionales:
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```
(Placeholders: {{apn}} = nombre del APN, {{apnu}} = usuario del APN, {{apnp}} = contraseña del APN)

- Configurar el servidor GPRS para usar el dominio Plaspy en el puerto 8888
```text
SERVER,1,d.plaspy.com,8888,0#
```
O configurar el servidor GPRS para usar la IP de Plaspy en el puerto 8888
```text
SERVER,0,54.85.159.138,8888,0#
```
(Plaspy soporta usar tanto el dominio como la IP; Plaspy usa el mismo puerto para todos los dispositivos y detectará automáticamente el protocolo del rastreador)

- Establecer el intervalo de actualización de ubicación cada 60 segundos
```text
TIMER,60#
```
Formato alternativo de timer donde se fijan tanto el intervalo GPS como el de subida:
```text
TIMER,60,60#
```

- Habilitar modo GPRS
```text
GPRSON,1#
```

- Para comprobar los parámetros GPRS y de servidor actuales en el dispositivo
```text
GPRSSET#
```

Use los comandos anteriores en el orden que coincida con su proceso de implementación. El envío del comando SERVER con d.plaspy.com o 54.85.159.138 y puerto 8888 es obligatorio para que el JM-BL11 pueda conectarse a Plaspy mediante el transporte elegido.

## Notas de configuración

- Las diferencias de firmware pueden cambiar el conjunto exacto de comandos SMS o la sintaxis requerida; verifique el formato de los comandos con los materiales del fabricante si un comando no responde como se espera.
- La configuración puede realizarse por SMS como se muestra o mediante las herramientas del proveedor Concox cuando estén disponibles; use el método oficial recomendado para su firmware y escala de despliegue.
- Elija TCP o UDP según sus necesidades operativas; Plaspy soporta ambos transportes y detectará automáticamente el protocolo del dispositivo cuando se conecte al puerto compartido.
- Preserve con exactitud las credenciales del APN al ingresarlas; ajustes incorrectos del APN impedirán que el dispositivo establezca conectividad de datos para alcanzar Plaspy.
- Después de la configuración, espere un breve periodo y confirme que el dispositivo reporta correctamente a Plaspy antes de finalizar cualquier instalación en campo.

## Por qué usar Plaspy con esta configuración

Usar el JM-BL11 con Plaspy ofrece a los operadores de flotas un informe consolidado de ubicaciones, eventos y telemetría que soporta flujos de trabajo anti robo, control de geocercas y planificación de mantenimiento para desplegados de micromovilidad a gran escala. La combinación de hardware robusto, larga duración de batería y el enfoque de servidor compartido de Plaspy simplifica la incorporación y el escalado de flotas distribuidas.

Learn more about Plaspy on the main website https://www.plaspy.com and verify device specific configuration methods, firmware behavior, and manufacturer details on the Concox site https://www.iconcox.com/ since manufacturer specifications and setup procedures can change over time.
