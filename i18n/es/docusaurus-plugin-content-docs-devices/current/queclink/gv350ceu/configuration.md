---
slug: /queclink/gv350ceu/configuration
id: gv350ceu-configuration
sidebar_label: Configuration
title: QuecLink - GV350CEU Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para integrar QuecLink GV350CEU con Plaspy incluye ajustes de servidor y comandos SMS
keywords:
  - Configuración QuecLink GV350CEU
  - Instalación QuecLink GV350CEU
  - Configuración GV350CEU para Plaspy
  - Configuración de rastreador Plaspy
  - Configuración servidor de rastreador GPS
  - Configuración de dispositivo de seguimiento de flotas
  - Comandos SMS QuecLink
  - Configuración telemática de vehículos
  - Rastreador GNSS LTE GV350CEU
  - Compatibilidad QuecLink Plaspy
---

# QuecLink - Configuración del GV350CEU

Esta página ofrece el contexto público de configuración para usar el QuecLink GV350CEU con Plaspy. Reúne guías prácticas de instalación, los parámetros de servidor de Plaspy que debe aplicar en el equipo y ejemplos de comandos SMS publicados para el GV350CEU. Use esta información como punto de partida práctico para conectar un GV350CEU a Plaspy, respetando los procedimientos de sitio o del instalador que ya emplee.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos concretos en el lado del fabricante pueden variar según la versión de firmware del GV350CEU, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Los comandos SMS de ejemplo que se muestran más abajo reflejan un método comúnmente publicado para dispositivos QuecLink en el que se usa SMS o herramientas del fabricante para configurar el APN y los endpoints del servidor. Verifique el comportamiento específico del firmware en su equipo antes de aplicar cambios.

## Resumen de configuración

Esta configuración prepara el GV350CEU para comunicarse con Plaspy usando el endpoint y puerto compartidos de la plataforma. El objetivo es asegurar que el dispositivo reporte posiciones GNSS y telemetría vehicular a Plaspy de forma confiable y que la unidad sea visible en la plataforma una vez verificado el envío de datos.

- Configure el APN y los parámetros GPRS del equipo para que pueda alcanzar Plaspy por datos celulares.
- Defina el endpoint y puerto del servidor Plaspy para que los reportes se enruten a d.plaspy.com y al servicio de ingestión de la plataforma.
- Seleccione transporte UDP o TCP en el dispositivo según las condiciones de la red local.
- Verifique los intervalos de actualización y las entradas de eventos para que el dispositivo reporte con la frecuencia deseada y envíe alarmas.
- Valide que el dispositivo sea visible en Plaspy después de la configuración y confirme que la telemetría y los eventos de E/S aparezcan como se espera.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto 8888 para todos los dispositivos en la plataforma

## Requisitos típicos antes de la instalación

- Acceso físico al GV350CEU o acceso remoto a su interfaz de configuración según lo provea el fabricante
- Una SIM celular con datos activos y capacidad de SMS y los detalles correctos del APN del operador
- La contraseña por defecto del equipo o acceso administrativo para la configuración; los ejemplos usan la contraseña por defecto queclink
- Acceso al método de configuración por SMS de QuecLink o a la herramienta oficial de software para el GV350CEU
- Conocimiento de los ajustes de servidor de Plaspy d.plaspy.com y 54.85.159.138 y del puerto 8888
- Un plan para probar el envío de reportes y los procedimientos de reinicio tras aplicar la configuración

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el GV350CEU envía posiciones, diagnósticos del bus vehicular y eventos de entradas a los endpoints y puerto compartidos de Plaspy. Plaspy recibe y normaliza los mensajes, y hace que el dispositivo sea visible en sus paneles y sistemas de alertas.

- El rastreador se configura para reportar al endpoint de Plaspy d.plaspy.com y a la IP 54.85.159.138 en el puerto 8888
- El equipo usa datos celulares para transmitir posiciones GNSS y telemetría por TCP o UDP según el transporte seleccionado
- SMS puede usarse para la configuración inicial o como mecanismo de respaldo donde esté disponible
- Plaspy detecta automáticamente el protocolo del rastreador para que la plataforma pueda parsear los datos entrantes sin selección manual por dispositivo
- Una vez activo el reporte, la plataforma ofrece mapas, historial, eventos y telemetría para la supervisión operativa

## Flujo común de configuración

1. Acceda al método oficial de configuración de QuecLink para el GV350CEU, por ejemplo comandos SMS o la herramienta del fabricante
2. Configure los ajustes del APN para la SIM instalada usando el APN del operador, usuario APN y contraseña APN correctos
3. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o 54.85.159.138 como endpoint
4. Establezca el puerto del servidor en 8888 en el dispositivo y elija UDP o TCP si el equipo requiere seleccionar transporte
5. Aplique o guarde la configuración en el dispositivo y reinícielo si el equipo o el flujo de trabajo requiere reinicio
6. Confirme que el dispositivo esté reportando a Plaspy y sea visible en la plataforma revisando actualizaciones de ubicación recientes y telemetría
7. Si es necesario, ajuste intervalos de reporte, entradas de alarma o la selección de transporte y vuelva a validar la visibilidad en Plaspy

## Comandos de configuración de ejemplo

El GV350CEU puede configurarse enviando comandos SMS al dispositivo. Los siguientes comandos son ejemplos públicos para dispositivos QuecLink. Los comandos usan la contraseña del dispositivo queclink que es la predeterminada en estos ejemplos. Conserve y reemplace marcadores como [apn], [apnu] y [apnp] por los valores de su operador.

1. Paso inicial opcional para restaurar ajustes de fábrica
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Establecer la zona horaria a UTC más cero
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Configurar el APN del operador
```text
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```
- [apn] es el APN del operador móvil
- [apnu] es el nombre de usuario del APN si el operador lo requiere
- [apnp] es la contraseña del APN si el operador lo requiere

4. Configurar el servidor GPRS para reportar a Plaspy en el puerto 8888
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
- Este comando configura el equipo para usar d.plaspy.com y 54.85.159.138 apuntando al puerto 8888

5. Establecer el intervalo de actualización periódico a 60 segundos
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Habilitar notificación del botón SOS en la entrada 2
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Tenga en cuenta que estos comandos se presentan en el orden que comúnmente se recomienda para la configuración inicial. Úselos como ejemplos publicados y confirme cada comando con la documentación de firmware de su dispositivo.

## Notas de configuración

- La configuración por SMS es un método habitual en dispositivos QuecLink, pero la herramienta del fabricante o la alternativa por USB puede ser preferible para configuraciones masivas u offline
- Diferencias de firmware y revisiones de hardware pueden cambiar la sintaxis de los comandos o los parámetros disponibles, por lo que debe verificar los comandos en la revisión de firmware de su GV350CEU
- Elija TCP o UDP según la confiabilidad de la red y las preferencias de su organización; Plaspy acepta cualquiera de los dos en el puerto 8888
- Plaspy usa el mismo puerto 8888 para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que no necesita seleccionar el protocolo por dispositivo en la plataforma
- Mantenga las credenciales del APN y la contraseña del dispositivo seguras y cambie las contraseñas administrativas conforme a su política de seguridad después del aprovisionamiento inicial si el equipo lo permite

## Por qué usar Plaspy con esta configuración

Usar el GV350CEU con Plaspy integra la posición GNSS del vehículo, CANBus y otra telemetría vehicular en una única plataforma para visibilidad y control operativo. Esta configuración permite a las flotas recibir actualizaciones de ubicación oportunas, alarmas desde entradas del equipo y diagnósticos del bus vehicular para que los equipos puedan monitorear activos, responder a eventos y analizar tendencias operativas.

To learn more about Plaspy and how it integrates with devices like the GV350CEU visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time so verify the latest setup and command reference on the QuecLink website https://www.queclink.com/.
