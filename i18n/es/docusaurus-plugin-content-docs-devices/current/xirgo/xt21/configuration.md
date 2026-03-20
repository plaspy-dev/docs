---
slug: /xirgo/xt21/configuration
id: xt21-configuration
sidebar_label: Configuration
title: Xirgo - XT21 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Xirgo XT21 con Plaspy, incluye ajustes de servidor y comandos SMS para integración
keywords:
  - Configuración Xirgo XT21
  - Configuración XT21 Plaspy
  - Instalación Xirgo XT21
  - Configuración de servidor XT21
  - Configuración del rastreador Xirgo
  - Configuración rastreador GPS XT21
  - Configuración SMS Xirgo XT21
  - Configuración rastreador de activos XT21
  - Configuración de dispositivo Plaspy
  - Configuración rastreador LTE XT21
---

# Xirgo - Configuración XT21

Esta página describe el contexto público de configuración para usar el rastreador Xirgo XT21 con Plaspy. Expone los valores compartidos del servidor Plaspy y ofrece orientación práctica para preparar el XT21 para que reporte posición y telemetría básica a la plataforma Plaspy. Cuando está disponible, se incluyen ejemplos de comandos públicos del fabricante para que pueda aplicarlos mediante el método de configuración que el proveedor soporte.

Plaspy utiliza valores de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El XT21 admite comandos de configuración por SMS como una opción pública; esta página explica cómo esos comandos se corresponden con los ajustes de servidor de Plaspy y describe un flujo de trabajo típico de configuración.

## Resumen de la configuración

El objetivo de la configuración es apuntar el XT21 a Plaspy, verificar la conectividad y asegurar que el dispositivo envíe la telemetría que Plaspy necesita para ubicación, detección de eventos y monitoreo de batería. Utilice los valores compartidos del servidor Plaspy a continuación y el método de configuración del fabricante que tenga disponible para que el rastreador quede visible en su cuenta Plaspy.

- Configure el APN del operador y el servidor GPRS para que el dispositivo establezca enlace de datos celular con Plaspy.
- Configure el endpoint del servidor y el puerto para que el XT21 envíe posición y telemetría a Plaspy.
- Verifique la selección de transporte (UDP o TCP) si el dispositivo requiere elegir uno explícitamente.
- Confirme que el dispositivo reporte fix GPS, eventos de entradas digitales y el voltaje de batería a la plataforma.
- Valide la visibilidad en Plaspy y confirme que las alertas de eventos y la telemetría coinciden con lo esperado.

## Ajustes del servidor Plaspy

Use los siguientes ajustes del servidor Plaspy al configurar el XT21. Estos valores son los públicos y compartidos que utiliza Plaspy:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporta UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles y realiza detección automática de protocolo para simplificar el onboarding de rastreadores.

## Requisitos típicos antes de la configuración

- Acceso al método de configuración del XT21 que le provea el instalador o el proveedor, como comandos SMS o la herramienta de configuración del fabricante.
- Tarjeta SIM LTE activa con un plan de datos compatible y los ajustes APN del operador móvil.
- Alimentación del XT21 y una fuente de energía estable en banco o en la instalación para la provisión inicial.
- Capacidad para enviar SMS desde un teléfono autorizado o una pasarela SMS si usa configuración vía SMS.
- Sus datos de cuenta Plaspy o detalles de provisión para confirmar que el dispositivo aparece en la plataforma tras la configuración.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el XT21 establece una conexión de datos celular y transmite posiciones y telemetría al endpoint y puerto compartidos de Plaspy. Plaspy ingiere los datos del dispositivo y asigna eventos de entradas digitales y telemetría de batería en la plataforma para monitoreo y alertas.

- El rastreador se apunta al dominio o IP del servidor Plaspy y usa el puerto 8888 para todo el tráfico del dispositivo.
- El XT21 envía actualizaciones periódicas de posición GPS y telemetría por LTE a Plaspy.
- Los eventos de entradas digitales y las lecturas de voltaje de batería se reportan a Plaspy para alertas y análisis.
- Plaspy utiliza detección automática de protocolo para reconocer el protocolo del rastreador una vez que el dispositivo se conecta.
- La visibilidad, las alertas y la reproducción histórica quedan disponibles en Plaspy una vez establecida la comunicación.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Xirgo que le haya proporcionado el proveedor, como comandos SMS, la herramienta web del vendedor o la utilidad oficial de configuración.
2. Ingrese el endpoint del servidor de Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138 según lo requiera la herramienta del dispositivo.
3. Establezca el puerto 8888 en el ajuste de servidor del equipo para que el XT21 envíe datos al puerto correcto de Plaspy.
4. Elija UDP o TCP si el dispositivo requiere una selección explícita de transporte y guarde esa elección.
5. Configure el APN del operador y cualquier credencial de la SIM para que el rastreador pueda registrarse en la red celular.
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del fabricante requieren un reinicio.
7. Valide que el dispositivo reporte a Plaspy y verifique que la ubicación, los eventos de entradas digitales y la telemetría de batería sean visibles en la plataforma Plaspy.

Si su método de configuración es por SMS, incluya los comandos SMS que aparecen en la sección Ejemplos de comandos de configuración a continuación, siguiendo las instrucciones del fabricante.

## Ejemplos de comandos de configuración

Los siguientes comandos son los comandos públicos de configuración por SMS incluidos en la documentación del modelo Xirgo XT21. Envíe estos mensajes SMS desde un número autorizado al dispositivo en el orden indicado.

1. Configure el APN del operador. Reemplace los marcadores con los valores de su operador:
```text
+XT:1002,{{apnu}},{{apnp}},{{apn}}
```
- {{apnu}} es el nombre de usuario del APN si su operador lo requiere.
- {{apnp}} es la contraseña del APN si su operador la requiere.
- {{apn}} es el nombre del APN del operador celular.

2. Configure el servidor GPRS para apuntar a Plaspy usando el puerto 8888 y la IP del servidor Plaspy:
```text
+XT:1001,8888,54.85.159.138,4,0,0
```
- Este comando configura el dispositivo para usar el puerto 8888 y la IP del servidor Plaspy 54.85.159.138. Conserve el orden de los argumentos tal como lo requiere el firmware del dispositivo.

Si prefiere usar el dominio en lugar de la IP y la herramienta del fabricante lo permite, ingrese d.plaspy.com como la dirección del servidor en lugar de la IP. El formato exacto del SMS para usar un dominio puede variar según la versión de firmware.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos o los parámetros disponibles. Verifique el formato exacto del SMS para su firmware antes de enviar comandos.
- Plaspy acepta conexiones en el puerto 8888 para todos los dispositivos y detecta automáticamente el protocolo del rastreador, lo que reduce la necesidad de seleccionar el protocolo manualmente en muchos casos.
- Elija UDP o TCP según las opciones del dispositivo y la preferencia del instalador; algunas instalaciones prefieren UDP por su menor sobrecarga y otras optan por TCP por la fiabilidad de sesión.
- La configuración por SMS está soportada para el XT21 como se muestra arriba, pero muchos instaladores emplean herramientas del proveedor o servicios de provisión cuando gestionan múltiples dispositivos.
- Si utiliza los marcadores {{apn}}, {{apnu}} y {{apnp}}, confirme las credenciales del APN con su operador móvil.

## Por qué usar Plaspy con esta configuración

Usar el XT21 con Plaspy ofrece a las organizaciones visibilidad sencilla de activos y telemetría básica para equipos remotos. Con ajustes de servidor compartidos y detección automática de protocolo, desplegar muchas unidades XT21 se simplifica, permitiendo a los equipos de operaciones concentrarse en la instalación y validación en lugar de la personalización por dispositivo.

Para obtener más información sobre Plaspy y cómo gestiona el onboarding de dispositivos y la visibilidad de flotas visite https://www.plaspy.com. Por favor verifique los detalles de configuración del fabricante y el comportamiento del firmware en el sitio oficial de Xirgo https://xirgo.com/ ya que los métodos y formatos de comando específicos del dispositivo pueden cambiar con el tiempo.
