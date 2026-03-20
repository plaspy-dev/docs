---
slug: /ev/ev_04/configuration
id: ev_04-configuration
sidebar_label: Configuration
title: EV - EV-04 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del EV-04 con ajustes de servidor Plaspy y comandos SMS para instalación e integración
keywords:
  - configuración EV EV-04
  - configuración EV-04 Plaspy
  - configuración servidor EV EV-04
  - configuración rastreador GPS EV-04
  - configuración rastreador personal EV
  - configuración rastreador Plaspy
  - comandos SMS EV-04
  - ajustes APN EV-04
  - configuración colgante GPS personal
  - integración rastreador GPS Plaspy
---

# EV - Configuración del EV-04

Esta página documenta el contexto público de configuración para usar el rastreador GPS personal EV-04 con Plaspy. Se concentra en los pasos prácticos visibles por el fabricante y en los valores compartidos del servidor Plaspy necesarios para que un EV-04 reporte ubicación y eventos a la plataforma Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, mientras que los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El EV-04 admite configuración por SMS según la documentación pública; los comandos de muestra abajo muestran la contraseña de fábrica por defecto y la sintaxis SMS usada para ajustar la zona horaria, el APN y el servidor cuando el cambio de servidor está habilitado.

## Resumen de configuración

Este proceso prepara un EV-04 para comunicarse con Plaspy, de modo que el dispositivo pueda entregar ubicación, SOS y telemetría a una instancia centralizada de monitoreo. El objetivo es asegurar que el dispositivo tenga conectividad móvil, el APN correcto y un endpoint de servidor apuntando al servidor compartido de Plaspy y al puerto correspondiente.

- Configure el APN del dispositivo y verifique la conectividad móvil para que el rastreador pueda acceder a internet.
- Ajuste la zona horaria y el reloj local del dispositivo para que las marcas de tiempo coincidan con los registros de eventos en Plaspy.
- Apunte el rastreador a Plaspy usando el endpoint y puerto compartidos para que la plataforma reciba ubicaciones y eventos SOS.
- Guarde o aplique los ajustes y reinicie el rastreador si es necesario para iniciar el reporte.
- Verifique que el dispositivo sea visible y esté reportando en Plaspy después de la configuración.

## Configuración del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; el dispositivo puede configurarse usando UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos habituales antes de la configuración

- Un EV-04 cargado con una SIM funcional y servicio móvil activo para datos y SMS cuando sea necesario.
- Acceso a un teléfono capaz de enviar comandos SMS (la configuración pública del EV-04 admite comandos por SMS).
- La contraseña por defecto del dispositivo (el ejemplo del fabricante usa 123456) o la contraseña actual si fue cambiada.
- Instrucciones de configuración del fabricante o contacto de soporte para habilitar el cambio de servidor si el dispositivo tiene esa opción deshabilitada por defecto.
- Conocimientos básicos sobre los ajustes APN del operador móvil que usará el dispositivo.

## Cómo se conecta este rastreador a Plaspy

El EV-04 se configura para reportar ubicación y eventos al endpoint y puerto compartidos de Plaspy, de modo que Plaspy pueda recibir telemetría en tiempo real y alertas SOS. Una vez que el dispositivo esté apuntando al endpoint de Plaspy y tenga conectividad móvil, Plaspy recibirá actualizaciones de posición y notificaciones de eventos para monitoreo y alertas.

- El dispositivo envía actualizaciones periódicas de ubicación a d.plaspy.com (o a la IP de Plaspy) en el puerto 8888 usando el transporte seleccionado.
- Los eventos SOS y las alertas por caídas se entregan a Plaspy para su procesamiento inmediato y enrutamiento de notificaciones.
- Las llamadas bidireccionales y los cambios de estado de eventos se registran en Plaspy para auditoría y seguimiento.
- Plaspy detecta automáticamente el protocolo del dispositivo, por lo que a menudo no es necesario seleccionar el protocolo en el servidor, aunque el dispositivo puede requerir elegir el transporte (UDP o TCP).

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración del fabricante EV; para EV-04 esto puede incluir comandos SMS documentados por el fabricante o herramientas del vendedor.
2. Asegúrese de que el dispositivo tenga una SIM válida con el APN del operador configurado y la batería cargada.
3. Ingrese el endpoint del servidor Plaspy usando d.plaspy.com o la IP 54.85.159.138 en la configuración del dispositivo.
4. Configure el puerto en 8888 (Plaspy usa el mismo puerto para todos los dispositivos).
5. Elija UDP o TCP en el dispositivo si se requiere selección de transporte; el dispositivo puede configurarse usando UDP o TCP en el puerto 8888.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware o el equipo lo requieren para empezar a reportar.
7. Valide que el EV-04 reporte a Plaspy y aparezca en la plataforma con actualizaciones con marcas de tiempo correctas.

## Comandos de ejemplo para configuración

El fabricante de EV documenta la configuración por SMS para el EV-04. Los comandos de ejemplo a continuación usan la contraseña por defecto del dispositivo 123456 según el contenido público del fabricante. Tenga en cuenta que el fabricante indica que cambiar el objetivo del servidor puede requerir solicitarles que habiliten la opción primero.

- Establecer la zona horaria en UTC+0
```text
123456L+00
```

- Establecer el APN del operador (reemplazar [apn], e incluir [apnu] y [apnp] si su operador requiere usuario y contraseña)
```text
123456S1,[apn],[apnu],[apnp]
```
Explicación: [apn] es el APN del operador móvil. [apnu] y [apnp] son campos opcionales de usuario y contraseña del APN que solo se usan si su operador los requiere.

- Establecer la IP y el puerto del servidor a Plaspy (nota del fabricante: puede necesitar solicitar que se habilite el cambio de servidor)
```text
123456I1,54.85.159.138,8888
```
Notas:
- El ejemplo del fabricante muestra la IP numérica del servidor y el puerto. También puede usar el dominio d.plaspy.com cuando el dispositivo soporte nombres de host.
- El dispositivo puede requerir que el fabricante habilite el cambio de servidor antes de que el comando I1 surta efecto.

## Notas de configuración

- La configuración por SMS está soportada según los comandos públicos mostrados; confirme que su unidad utiliza el mismo conjunto de comandos SMS y la contraseña por defecto antes de enviar comandos.
- Revisiones de firmware o hardware pueden cambiar la sintaxis de comandos o las contraseñas por defecto; verifique con la documentación del fabricante o con su soporte.
- Elija UDP o TCP según el menú de configuración del dispositivo; Plaspy aceptará cualquiera de los dos transportes en el puerto 8888 y detectará automáticamente el protocolo correcto.
- Confirme los valores APN con su operador móvil y conserve los marcadores [apn], [apnu] y [apnp] tal como aparecen cuando corresponda.
- Contacte al fabricante o al proveedor si el dispositivo no acepta cambios de servidor; algunas unidades requieren un paso de habilitación o activación por parte del distribuidor.

## Por qué usar Plaspy con esta configuración

Usar el EV-04 con Plaspy ofrece visibilidad centralizada para dispositivos de seguridad personal, permitiendo que centros de monitoreo y cuidadores reciban actualizaciones de ubicación, alertas SOS y registros de eventos de forma oportuna. El enfoque de servidor compartido de Plaspy simplifica el aprovisionamiento de dispositivos porque todos los dispositivos compatibles reportan al mismo puerto y Plaspy gestiona la detección de protocolos en el backend.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device-specific configuration details, firmware behavior, and manufacturer instructions at the official EV website http://www.eviewltd.com/. Device configuration steps and manufacturer options can change over time so always confirm current guidance with the manufacturer.
