---
slug: /megastek/mt60pro/configuration
id: mt60pro-configuration
sidebar_label: Configuration
title: Megastek - MT60PRO Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador de tobillo Megastek MT60PRO y reportar a Plaspy mediante servidor compartido y comandos SMS o GPRS
keywords:
  - Configuración Megastek MT60PRO
  - Configuración MT60PRO
  - MT60PRO Plaspy
  - Configuración rastreador Megastek
  - Configuración servidor MT60PRO
  - Rastreador para liberados condicionales
  - Configuración rastreador GPS de tobillo
  - Configuración GPRS MT60PRO
  - Configuración rastreador Plaspy
  - Comandos SMS MT60PRO
---

# Megastek - Configuración MT60PRO

Esta página documenta el contexto público de configuración para usar el rastreador de tobillo Megastek MT60PRO con Plaspy. Reúne los valores de servidor compartido y la guía práctica que la mayoría de instaladores e integradores necesitarán para apuntar el dispositivo a Plaspy y verificar que la telemetría, las alarmas y las actualizaciones de ubicación lleguen a la plataforma. Cuando se requieren pasos del fabricante, presentamos ejemplos públicos de comandos SMS y explicamos los marcadores de posición.

Plaspy utiliza ajustes de servidor compartido para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, mientras que los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El MT60PRO admite comandos de configuración por SMS y GPRS según su documentación pública; use las herramientas del fabricante y el IMEI del dispositivo al aplicar los comandos que se muestran a continuación y verifique las diferencias con las notas de firmware de Megastek.

## Resumen de la configuración

Configurar el MT60PRO para Plaspy prepara el rastreador para enviar datos periódicos de posición y eventos al endpoint de Plaspy, de modo que el dispositivo sea visible en su instancia de Plaspy y genere alertas y registros. El proceso suele incluir establecer la identidad del dispositivo, el APN para datos móviles, el endpoint del servidor GPRS, la selección del protocolo de transporte y habilitar el modo de reporte de datos.

- Defina el identificador del dispositivo para que Plaspy pueda asociar el IMEI con una cuenta o registro de dispositivo.
- Configure el APN celular y las credenciales opcionales del APN para permitir cargas GPRS.
- Apunte el servidor GPRS del dispositivo al endpoint de Plaspy para que las ubicaciones y registros de evento lleguen a la plataforma.
- Elija UDP o TCP si el dispositivo requiere selección de transporte y ajuste el puerto común usado por Plaspy.
- Habilite el modo GPRS del dispositivo y establezca un intervalo de actualización razonable para controlar la frecuencia de reporte.
- Valide la conectividad y que Plaspy recibe telemetría, alarmas y actualizaciones de estado.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com  
- IP del servidor: 54.85.159.138  
- Puerto: 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles)  
- Transporte: el dispositivo puede configurarse para usar UDP o TCP en el puerto 8888  
- Manejo del protocolo: Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos típicos antes de la configuración

- Confirme que el MT60PRO tiene la batería cargada y está encendido.  
- Asegúrese de que haya instalada una SIM celular activa con datos habilitados y que disponga de los detalles del APN.  
- Tenga a la mano el IMEI del dispositivo; muchos comandos usan el IMEI como identificador.  
- Acceso al método de configuración del fabricante que use su dispositivo (comandos SMS, software del proveedor o herramienta de aprovisionamiento).  
- Un teléfono o gateway SMS operativo si va a configurar mediante comandos SMS.  
- Expectativa razonable de que el firmware del dispositivo soporta los comandos SMS/GPRS listados; verifique las notas de firmware cuando sea posible.

## Cómo se conecta este rastreador a Plaspy

El MT60PRO puede configurarse para subir datos GPRS al endpoint y puerto compartidos de Plaspy, de modo que la ubicación en tiempo real, eventos de manipulación y otra telemetría aparezcan en los paneles y flujos de trabajo de Plaspy. Una vez apuntado al endpoint de Plaspy, el dispositivo enviará actualizaciones periódicas e informes de eventos que Plaspy ingiere; Plaspy detectará el protocolo automáticamente y presentará los datos del dispositivo para monitoreo y alertas.

- El rastreador envía paquetes de ubicación y estado al endpoint del servidor Plaspy d.plaspy.com (o 54.85.159.138) en el puerto 8888.  
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los instaladores solo necesitan apuntar el dispositivo al servidor y puerto correctos.  
- Informes de eventos como manipulación, SOS, corte de correa y alertas de batería se suben vía GPRS y aparecen en Plaspy para reglas y notificaciones.  
- Las cargas periódicas de posición están controladas por el intervalo de actualización del dispositivo y la configuración del modo GPRS.  
- Donde el flujo de trabajo del dispositivo lo permita, comandos remotos y cambios de configuración pueden ser retransmitidos a través de Plaspy.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración Megastek que use para el MT60PRO (comandos SMS, software de aprovisionamiento del proveedor o herramienta de instalador).  
2. Establezca la identidad del dispositivo o IMEI según se requiera para que Plaspy pueda emparejar las conexiones entrantes con su cuenta.  
3. Ingrese el host del servidor Plaspy como d.plaspy.com o la IP 54.85.159.138.  
4. Configure el puerto del servidor a 8888 y elija UDP o TCP si el dispositivo solicita selección de transporte.  
5. Configure el APN y cualquier nombre de usuario o contraseña del APN necesarios para el GPRS celular.  
6. Aplique o guarde la configuración y habilite el GPRS o el modo de reporte de datos en el dispositivo.  
7. Reinicie o haga un ciclo de energía del dispositivo si el fabricante lo recomienda.  
8. Valide que el dispositivo reporta a Plaspy y monitoree la telemetría inicial y cualquier alarma en la plataforma.

## Ejemplos de comandos de configuración

Los ejemplos públicos de configuración del MT60PRO usan comandos SMS. La contraseña predeterminada mostrada en ejemplos públicos es 000000 — confirme y cambie esta contraseña según su política de seguridad después del aprovisionamiento inicial.

1. Establecer ID del dispositivo (reemplazar <IMEI> con el IMEI de 15 dígitos del dispositivo)
```text
M000000,22,<IMEI>
```

2. Establecer APN del operador (reemplazar {{apn}} con el APN de su operador; opcionalmente {{apnu}} y {{apnp}} son usuario y contraseña del APN)
```text
M000000,23,{{apn}}
```
Si su APN requiere usuario o contraseña:
```text
M000000,23,{{apn}},{{apnu}},{{apnp}}
```

3. Establecer intervalo de actualización a 60 segundos
```text
M000000,25,60
```

4. Configurar el servidor GPRS a Plaspy (el ejemplo público usa un identificador seguido de IP y puerto)
```text
M000000,24,56 54.85.159.138,8888
```
Nota: El ejemplo establece el servidor usando el prefijo numérico mostrado en los comandos públicos. Alternativamente, puede permitir establecer el dominio d.plaspy.com en algunas herramientas de aprovisionamiento; confirme la sintaxis exacta para su firmware.

5. Habilitar modo GPRS
```text
M000000,21,2
```

Notas importantes sobre estos comandos:
- 000000 se muestra como la contraseña de ejemplo en ejemplos públicos; reemplácela con la contraseña real del dispositivo o cámbiela tras el aprovisionamiento.  
- Mantenga los marcadores de posición como {{apn}}, {{apnu}} y {{apnp}}; deben ser reemplazados por los valores del APN de su operador.  
- El orden de los comandos importa en el aprovisionamiento inicial: configure primero el APN, luego el servidor y finalmente el modo de reporte.  
- Si su método de aprovisionamiento admite el dominio d.plaspy.com, puede usarlo en lugar de la IP; ambos, dominio e IP, se proporcionan públicamente.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la sintaxis exacta de los SMS o los parámetros soportados; siempre verifique los comandos según la revisión de firmware del dispositivo.  
- El aprovisionamiento por SMS es común en ejemplos públicos, pero el software del proveedor o una herramienta MDM puede ofrecer un flujo de trabajo más seguro para configuraciones masivas.  
- Elija UDP o TCP según la preferencia del instalador; Plaspy soporta ambos y detecta el protocolo al conectarse.  
- Como Plaspy usa el puerto 8888 para todos los dispositivos compatibles, confirme que el host y puerto del servidor se aplican exactamente como se indica.  
- Después del aprovisionamiento, supervise la primera conexión en Plaspy para confirmar que el IMEI y la identidad del dispositivo coinciden con el registro esperado.

## Por qué usar Plaspy con esta configuración

Usar el MT60PRO con Plaspy centraliza el seguimiento, las alertas y el historial de eventos de personas supervisadas en una sola plataforma. Los ajustes de servidor compartido y la detección automática de protocolo de Plaspy reducen la complejidad para los instaladores: al apuntar el dispositivo a d.plaspy.com o 54.85.159.138 en el puerto 8888 y habilitar el reporte GPRS, los dispositivos normalmente comienzan a enviar datos de ubicación y alarma a Plaspy para reglas, notificaciones y gestión de casos.

Para obtener más información sobre Plaspy visite https://www.plaspy.com. Los métodos específicos de configuración de dispositivos, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo; verifique los últimos detalles de configuración y la sintaxis de comandos en el sitio oficial de Megastek https://www.megastek.com/ antes de desplegar dispositivos en campo.
