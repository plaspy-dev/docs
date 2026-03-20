---
slug: /istartek/pt60_l/configuration
id: pt60_l-configuration
sidebar_label: Configuration
title: iStartek - PT60-L Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador iStartek PT60 L y conectarlo a los ajustes de servidor de Plaspy
keywords:
 - configuración iStartek PT60 L
 - instalación iStartek PT60 L
 - configuración PT60 L Plaspy
 - ajustes de servidor PT60 L
 - comandos SMS PT60 L
 - configuración rastreador GPS PT60 L
 - configuración rastreador Plaspy
 - rastreo de flotas PT60 L
 - configuración servidor rastreador GPS
 - seguimiento de activos PT60 L
---

# iStartek - Configuración del PT60-L

Esta página documenta el contexto público de configuración para usar el rastreador GPS iStartek PT60-L con Plaspy. Resume los ajustes de servidor prácticos, el flujo de configuración común y los comandos de configuración públicos para que usted prepare el dispositivo y reporte telemetría y posición a la plataforma Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los rastreadores compatibles y detecta automáticamente el protocolo del dispositivo cuando llegan los mensajes. Los pasos de configuración en el dispositivo para el PT60-L pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; esta guía destaca los comandos SMS públicos y el flujo de trabajo típico usado para la configuración inicial.

## Resumen de configuración

Preparar el PT60-L para la conectividad con Plaspy se centra en configurar el dispositivo para que alcance el endpoint compartido de Plaspy y en validar que el rastreador reporte correctamente. El PT60-L admite configuración vía SMS según la documentación pública que sigue, y ofrece intervalos de reporte configurables para equilibrar vida de batería y capacidad de rastreo.

- Configure el servidor del dispositivo para que apunte a Plaspy usando el dominio público o la IP y el puerto compartido.
- Establezca un APN correcto y verifique que la SIM instalada soporte datos y conexiones salientes TCP o UDP.
- Elija el modo de transporte (UDP o TCP) cuando el rastreador requiera una selección explícita.
- Configure el intervalo de reporte o temporizador de acuerdo con sus objetivos de rastreo y duración de batería.
- Valide la configuración con una comprobación de parámetros y confirme que posición y telemetría aparecen en Plaspy.

## Ajustes de servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador en conexiones entrantes

Estos valores exactos son los ajustes públicos de Plaspy que debe aplicar al PT60-L para que el dispositivo pueda alcanzar la plataforma y sea identificado por Plaspy.

## Requisitos típicos antes de la configuración

- Un PT60-L con batería cargada o una fuente de alimentación durante la configuración inicial.
- Una tarjeta SIM activa provisionada para datos y SMS para la región y la variante del equipo.
- Información del APN del operador celular para configurar el acceso de datos GPRS.
- Acceso al método oficial de configuración de iStartek o a las instrucciones SMS del proveedor para el PT60-L.
- Un medio para enviar comandos SMS al dispositivo desde un número de teléfono conocido si se usa la configuración por SMS.
- Una cuenta en Plaspy y acceso a la plataforma para confirmar que el dispositivo reporta tras la configuración.

## Cómo se conecta este rastreador a Plaspy

El PT60-L transmite la ubicación GNSS y la telemetría del equipo a Plaspy usando el endpoint de servidor y el transporte configurados. Una vez que el dispositivo está configurado para usar el servidor y el puerto de Plaspy, la plataforma ingiere esos mensajes y muestra ubicación, estado de batería y alarmas.

- El rastreador reporta al endpoint compartido de Plaspy usando d.plaspy.com o la IP proporcionada.
- Los mensajes se envían por el transporte seleccionado, UDP o TCP, al puerto 8888.
- Plaspy recibe los mensajes y detecta automáticamente el protocolo del dispositivo para parsear la telemetría.
- Los intervalos de reporte se pueden ajustar para equilibrar necesidades de ubicación en tiempo real con larga duración en espera de la batería.
- Las alarmas e informes de eventos del PT60-L aparecen en los paneles e historial de Plaspy una vez que el dispositivo está conectado.

## Flujo de configuración común

1. Acceda al método oficial de configuración del fabricante o al software provisto por iStartek, normalmente vía comandos SMS o herramientas del proveedor.
2. Asegúrese de que el dispositivo tenga una SIM activa con el APN correcto y esté encendido.
3. Ingrese el servidor de Plaspy como d.plaspy.com o, alternativamente, la IP 54.85.159.138 en la configuración del equipo.
4. Configure el puerto del servidor en 8888, según lo requiere Plaspy.
5. Elija UDP o TCP si el rastreador solicita una selección explícita del transporte.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware requiere reboot para aplicar cambios.
7. Valide que el dispositivo reporta a Plaspy revisando el estado en la plataforma y usando el comando de verificación de parámetros si está disponible.

Si utiliza configuración vía SMS, siga la sintaxis y el orden de comandos del fabricante (reseteo primero solo cuando sea necesario), luego configure APN y ajustes de servidor como en los ejemplos siguientes.

## Ejemplos de comandos de configuración

El PT60-L documenta un conjunto de comandos SMS usados para la configuración pública. Mantenga el orden al seguir una configuración inicial y trate el comando de reset de fábrica como opcional para uso inicial o de recuperación.

- Reset de fábrica opcional para configuración inicial o recuperación
```
FACTORY#
```

- Establecer la zona horaria a UTC 0
```
GMT,E,0#
```

- Establecer el APN del operador
Nota: [apn] es el APN del operador. [apnu] y [apnp] son marcadores opcionales para usuario y contraseña del APN cuando el operador los requiere.
```
APN,[apn]#
```
O, cuando se requieren usuario y contraseña:
```
APN,[apn],[apnu],[apnp]#
```

- Configurar el servidor GPRS al dominio de Plaspy usando el puerto compartido
```
SERVER,1,d.plaspy.com,8888#
```

- Ajuste alternativo del servidor usando la IP de Plaspy y el puerto compartido
```
SERVER,0,54.85.159.138,8888#
```

- Establecer el intervalo de actualización a cada 60 segundos
```
TIMER,60#
```

- Comprobar parámetros y configuración actuales
```
PARAM#
```

Envíe cada comando como un único mensaje SMS al dispositivo siguiendo la sintaxis SMS de iStartek. Reemplace los marcadores por los datos reales del APN proporcionados por su operador móvil.

## Notas de configuración

- La configuración por SMS está documentada públicamente para el PT60-L y se usa comúnmente para aprovisionamiento remoto cuando el acceso físico es limitado.
- Las revisiones de firmware o firmwares específicos por región pueden cambiar la sintaxis exacta de comandos o los parámetros soportados; verifique con la documentación más reciente de iStartek.
- Elija UDP o TCP según sus requisitos operativos y la confiabilidad de la red. Plaspy soporta ambos transportes en el puerto 8888.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que los ajustes correctos de servidor y puerto son críticos para la conectividad.
- Confirme los ajustes de APN y las posibles restricciones del operador de la SIM antes de aplicar la configuración del servidor para evitar demoras en la conectividad.

## Por qué usar Plaspy con esta configuración

Usar el PT60-L con Plaspy ofrece un camino directo para incorporar rastreo de activos de larga duración y sin instalación compleja en su programa de flotas o gestión de activos. Los intervalos de reporte configurables y las capacidades de telemetría del PT60-L, junto con la detección automática de protocolos y el endpoint unificado de Plaspy, le permiten gestionar muchos dispositivos con una configuración de servidor coherente.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the most current device specific configuration and firmware behavior on the manufacturer site https://istartek.com/. Manufacturer specifications, setup methods, and firmware behavior can change over time so confirm current procedures on the official iStartek documentation before large scale deployments.
