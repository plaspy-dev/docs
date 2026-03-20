---
slug: /ev/ev_05/configuration
id: ev_05-configuration
sidebar_label: Configuration
title: EV - EV-05 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador GPS portátil EV-05 y conectarlo a Plaspy
keywords:
  - configuración EV EV-05
  - configuración EV-05
  - rastreador GPS portátil EV
  - configuración Plaspy
  - instalación rastreador GPS
  - configuración rastreador portátil
  - configuración servidor EV-05
  - configuración EV-05 Plaspy
  - integración plataforma GPS
  - configuración rastreador seguridad personal
---

# EV - Configuración del EV-05

Esta página documenta la información pública de configuración para usar el reloj de seguridad móvil EV-05 con Plaspy. Reúne los datos prácticos de instalación disponibles públicamente, explica los ajustes de servidor compartidos que debe usar en Plaspy y resume los pasos habituales para preparar el reloj para que reporte ubicación y alertas al platforma Plaspy.

Plaspy acepta telemetría de muchos tipos de dispositivos mediante ajustes de servidor compartidos y detección automática de protocolo. Los pasos exactos en el lado del fabricante para el EV-05 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; el EV-05 también admite comandos de configuración por SMS como parte del flujo público descrito a continuación.

## Resumen de la configuración

El objetivo de este proceso es preparar el EV-05 para que se comunique de forma fiable con Plaspy y sea visible en el panel. Para el EV-05, esto suele implicar usar el método de configuración del fabricante (SMS o herramienta del proveedor) para definir el APN de la red y el endpoint del servidor, confirmar el tipo de transporte y validar el reporte durante la operación normal y en modo SOS.

- Configure la zona horaria del dispositivo y el APN del operador para asegurar conectividad de datos.
- Defina el endpoint del servidor para que los reportes lleguen a Plaspy.
- Seleccione el transporte (UDP o TCP) si el dispositivo requiere elegir uno y guarde el cambio.
- Valide la conectividad y el reporte de eventos en Plaspy para que SOS y telemetría sean visibles para los usuarios que monitorean.
- Si usa configuración por SMS, aplique los comandos en el orden que recomiende el fabricante y confirme que el dispositivo reconoce los cambios.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar el EV-05:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte: configure UDP o TCP en el puerto 8888 si el dispositivo solicita elegir transporte
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que un único puerto se usa para todos los dispositivos compatibles

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos y confía en la detección automática de protocolo para gestionar distintos protocolos de rastreadores.

## Requisitos habituales antes de la configuración

- Un EV-05 cargado y encendido, listo para configurar y con cobertura de red
- Una tarjeta SIM activa con plan de datos y capacidad de SMS insertada en el reloj si usa configuración celular o por SMS
- Acceso al método oficial de configuración del fabricante para el EV-05 (comandos SMS, herramienta web del proveedor o aplicación del fabricante)
- Conocimiento de la contraseña predeterminada del dispositivo (el valor público que aparece en los ejemplos es 123456) y la posibilidad de cambiarla si es necesario
- Información de la red como el APN de su operador y, opcionalmente, usuario/contraseña del APN
- Datos de contacto del vendedor o del soporte del fabricante si es necesario habilitar permisos para cambiar el servidor

## Cómo se conecta este rastreador a Plaspy

El EV-05 envía ubicación, alertas de seguridad y telemetría seleccionada a Plaspy dirigiendo sus conexiones salientes al endpoint y puerto compartido de Plaspy. Una vez configurado con los ajustes de servidor de Plaspy, el reloj enviará actualizaciones periódicas de posición y mensajes de evento que Plaspy procesa y muestra.

- El dispositivo envía paquetes de posición y eventos a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888
- El EV-05 puede usar transporte UDP o TCP según su configuración y las condiciones de la red
- Plaspy detecta automáticamente el protocolo y procesa los datos del rastreador sin requerir puertos específicos por dispositivo
- SOS, alertas por caída y telemetría se reenvían a Plaspy para que los usuarios de monitoreo reciban notificaciones de alta prioridad
- La configuración se considera correcta cuando Plaspy recibe los primeros mensajes de posición o latidos del dispositivo

## Flujo común de configuración

1. Acceda al método oficial de configuración del fabricante para el EV-05 (comandos SMS, portal de configuración del proveedor o herramienta proporcionada por el fabricante).
2. Confirme que el dispositivo esté encendido, tenga una SIM activa si es necesario y que usted conozca la contraseña predeterminada del dispositivo (ejemplo público más abajo).
3. Introduzca la dirección del servidor de Plaspy estableciendo d.plaspy.com o 54.85.159.138 como endpoint del servidor.
4. Configure el puerto del servidor a 8888 y seleccione UDP o TCP si el dispositivo requiere elegir transporte.
5. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante recomienda hacerlo.
6. Valide que el EV-05 reporte a Plaspy comprobando mensajes de posición o latidos en la plataforma Plaspy.
7. Si el firmware restringe cambios de servidor, contacte al fabricante para habilitar la opción de cambio de servidor y vuelva a aplicar la configuración.

## Ejemplos de comandos de configuración

El EV-05 admite configuración por SMS. Los siguientes comandos son ejemplos tomados de contenido público de configuración del dispositivo. La contraseña de dispositivo de ejemplo usada en estos comandos es 123456, que corresponde al valor de fábrica público; cambie la contraseña cuando sea posible.

- Establecer la zona horaria a UTC+0
```text
123456L+00
```

- Configurar el APN del operador (reemplace {{apn}} con el APN de su operador; opcionalmente incluya {{apnu}} y {{apnp}} para usuario y contraseña del APN)
```text
123456S1,{{apn}},{{apnu}},{{apnp}}
```
Explicación: S1 establece el APN para datos. Mantenga los marcadores exactamente como se muestran y sustituya únicamente los valores requeridos por su operador móvil.

- Configurar el servidor del dispositivo a Plaspy (ejemplo público de comando). El fabricante indica que podría necesitar contactarlo para habilitar la opción de cambiar los ajustes de servidor en este dispositivo.
```text
123456I1,54.85.159.138,8888
```
Explicación: I1 indica configuración del servidor con IP y puerto. También puede especificar el dominio d.plaspy.com en lugar de la IP si el dispositivo acepta nombres de dominio, pero algunos firmwares requieren la IP numérica.

Importante: La documentación del fabricante indica que la capacidad para cambiar los ajustes del servidor puede estar restringida; contacte al fabricante para habilitar la opción de cambio de servidor si el dispositivo ignora estos comandos.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de comandos y las operaciones permitidas; confirme siempre el conjunto exacto de comandos SMS para su firmware del EV-05.
- El EV-05 admite la configuración por SMS como método público; las herramientas del proveedor o los servicios de aprovisionamiento pueden ofrecer flujos adicionales o alternativos.
- La selección TCP frente a UDP puede afectar las características de entrega en algunas redes; elija el transporte que mejor se adapte a sus necesidades de monitoreo y a la fiabilidad local de la red.
- Dado que el ejemplo público usa una contraseña por defecto (123456), cambie las credenciales del dispositivo cuando su flujo de trabajo y el fabricante lo permitan para mantener el control de acceso.
- Si el dispositivo no acepta cambios de servidor por SMS, coordine con el proveedor para habilitar la opción de cambio de servidor o utilice la herramienta de aprovisionamiento del proveedor.

## Por qué usar Plaspy con esta configuración

Configurar el EV-05 para enviar datos a Plaspy hace que la telemetría de seguridad portátil y la ubicación sean visibles junto con otros activos rastreados en una sola plataforma. Para organizaciones que gestionan seguridad personal, monitoreo remoto de pacientes o programas de trabajadores solitarios, esta integración centraliza eventos SOS, detección de caídas y telemetría en la misma vista operativa que se usa para otros dispositivos GPS.

Para obtener más información sobre cómo Plaspy gestiona las integraciones de dispositivos y para revisar las funciones de la plataforma, visite https://www.plaspy.com. Para los detalles más recientes sobre la configuración específica del EV-05, notas de firmware y orientación del fabricante, verifique la información en el sitio oficial del fabricante http://www.eviewltd.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
