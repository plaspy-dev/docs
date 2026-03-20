---
slug: /navtelekom/s_4651_4g/configuration
id: s_4651_4g-configuration
sidebar_label: Configuration
title: Navtelekom - СИГНАЛ S-4651 (4G) Configuration
sidebar_class_name: menu_item_tracker
description: Configuración pública para integrar Navtelekom СИГНАЛ S-4651 4G con Plaspy, con ajustes de servidor y flujo de instalación
keywords:
  - Configuración Navtelekom S-4651
  - Configuración S-4651 Plaspy
  - Configuración rastreador S-4651 4G
  - Configuración servidor rastreador Navtelekom
  - Configuración rastreador Plaspy
  - Seguimiento vehicular S-4651
  - Configuración rastreador GLONASS GPS
  - Configuración gestor de flotas rastreador
  - Configuración dual SIM S-4651
  - Guía configuración Navtelekom
---

# Navtelekom - Configuración de СИГНАЛ S-4651 (4G)

Esta página ofrece el contexto público de configuración para usar el rastreador Navtelekom СИГНАЛ S-4651 (4G) con Plaspy. Resume los ajustes de servidor prácticos y el flujo de instalación típico que deberá aplicar para apuntar el dispositivo a Plaspy y habilitar el seguimiento en tiempo real, la recopilación de telemetría y el reporte de eventos. Use esta guía junto con las herramientas de configuración del fabricante y la documentación de Navtelekom durante una instalación real.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, así que valide las instrucciones a continuación con utilitarios de configuración de Navtelekom como el NTC Configurator o la documentación oficial del equipo.

## Resumen de la configuración

Esta configuración prepara al S-4651 para enviar ubicación GNSS, eventos de entrada/salida y telemetría a Plaspy, de modo que el dispositivo quede visible y sea administrable desde la plataforma. El proceso se centra en configurar el endpoint del servidor, el método de transporte y los parámetros del fabricante necesarios para el reporte por celular.

- Configure el dispositivo para reportar al endpoint del servidor de Plaspy para que las posiciones y eventos lleguen a la plataforma.
- Seleccione el método de transporte que soporte el dispositivo (UDP o TCP) y establezca el puerto compartido de Plaspy.
- Verifique la SIM, el registro en la red y los ajustes APN requeridos por el proveedor celular antes de probar.
- Guarde y aplique los ajustes, luego confirme que el rastreador aparece en Plaspy y envía telemetría en vivo.
- Si aplica, registre el comportamiento de doble SIM o reglas de conmutación para que el S-4651 mantenga el reporte continuo.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com como nombre de host canónico para ingresar en la configuración del dispositivo.
- IP del servidor: 54.85.159.138 puede usarse donde se requiera un endpoint numérico.
- Puerto: 8888 es el puerto compartido que usa Plaspy para todos los rastreadores compatibles.
- Transporte: soporte para UDP o TCP según la opción de configuración del dispositivo; el S-4651 puede configurarse en cualquiera de los dos.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta, de modo que la plataforma puede interpretar los datos entrantes independientemente de variantes menores del protocolo.

## Requisitos habituales antes de la configuración

- Acceso al método o software de configuración oficial de Navtelekom, como el configurador del proveedor recomendado para el S-4651.
- Una unidad S-4651 alimentada y operativa con la alimentación del vehículo adecuada y, si se usa, batería interna de respaldo cargada.
- Conectividad celular activa en el dispositivo, incluidas SIM correctamente provisionadas y cobertura de red 2G/3G/4G según sea necesario.
- Documentación del fabricante o notas de la versión para la versión de firmware de su equipo para confirmar comandos y ajustes compatibles.
- Tarjeta microSD u otro medio de registro local instalado si piensa habilitar el registro local durante la configuración o pruebas.
- Acceso físico al dispositivo para conectar herramientas de configuración, antenas o para reiniciarlo si fuera necesario.

## Cómo se conecta este rastreador a Plaspy

El S-4651 transmite coordenadas GNSS, eventos de entrada/salida y telemetría a través de la red celular hacia el endpoint y puerto del servidor Plaspy definidos en el dispositivo. Una vez configurado, Plaspy ingiere esos mensajes y pone a disposición las posiciones y eventos para vista en vivo, alertas e informes.

- El rastreador envía datos al endpoint compartido d.plaspy.com o directamente a 54.85.159.138 según lo configure.
- Todos los rastreadores usan el mismo puerto en Plaspy, por lo que debe establecer el puerto 8888 en el dispositivo para asegurar la entrega correcta.
- Seleccione UDP o TCP en el dispositivo si la opción de transporte es requerida; Plaspy acepta ambos y realiza detección automática del protocolo.
- Cuando los mensajes llegan a Plaspy, la plataforma decodifica las posiciones y los eventos de E/S y los presenta en la interfaz de gestión de flotas.
- Confirme que el dispositivo reporte mensajes regulares de estado o posicionamiento para que Plaspy pueda mantener el estado activo del equipo.

## Flujo de trabajo de configuración común

1. Acceda al método o software de configuración oficial de Navtelekom recomendado para el S-4651, por ejemplo el NTC Configurator o la interfaz web/serie del dispositivo.
2. Localice los ajustes de servidor o reporte remoto en el configurador donde el dispositivo acepta valores de host y puerto.
3. Ingrese d.plaspy.com como nombre de host del servidor, o use 54.85.159.138 si su flujo de trabajo requiere una dirección IP.
4. Ajuste el puerto a 8888 que es el puerto compartido de Plaspy para todos los dispositivos.
5. Elija UDP o TCP si el dispositivo requiere selección de transporte; seleccione el transporte preferido para su instalación.
6. Aplique o guarde la configuración y siga las indicaciones del fabricante para confirmar los cambios.
7. Reinicie el dispositivo si la herramienta de configuración o el firmware lo requiere para comenzar a reportar a Plaspy.
8. Valide que el dispositivo informe a Plaspy comprobando en el panel de Plaspy una posición inicial o observando los mensajes entrantes en los registros de la plataforma.

## Ejemplos de comandos de configuración

Los comandos exactos de configuración y su formato dependen de la herramienta de Navtelekom y del firmware. Navtelekom típicamente proporciona un configurador del proveedor o gestión remota DRC para establecer servidor, puerto y transporte. Si usa SMS o una interfaz serie/USB para configurar, siga los comandos documentados por Navtelekom para su versión de firmware. Debido a la variabilidad en las herramientas y la sintaxis de comandos del fabricante, confirme la sintaxis en la documentación oficial de Navtelekom antes de aplicar cambios.

## Notas de configuración

- Las diferencias de firmware pueden cambiar las opciones de menú disponibles o la sintaxis de SMS/comandos; siempre confirme los pasos exactos para su revisión de firmware.
- TCP y UDP son compatibles para la conexión a d.plaspy.com en el puerto 8888; elija el transporte que coincida con sus necesidades operativas y la fiabilidad de la red.
- El modelo СИГНАЛ S-4651 está archivado por el fabricante; existe documentación y un historial de firmware, pero confirme la compatibilidad con las herramientas actuales.
- La conmutación por doble SIM debe configurarse según la guía de Navtelekom para mantener el reporte ininterrumpido a Plaspy.
- Al probar, supervise Plaspy en busca de datos entrantes después de guardar los ajustes para confirmar que el dispositivo es visible y reporta correctamente.

## Por qué usar Plaspy con esta configuración

Usar el Navtelekom СИГНАЛ S-4651 (4G) con Plaspy permite a las flotas consolidar posiciones GNSS, eventos de entrada/salida y telemetría en una única plataforma para supervisión operativa. El endpoint compartido de Plaspy y la detección automática de protocolo simplifican la incorporación de dispositivos porque las mismas convenciones de puerto y host aplican a los rastreadores compatibles.

Para obtener más información sobre Plaspy y cómo se integra con dispositivos como el S-4651 visite https://www.plaspy.com. Para los métodos de configuración específicos más actuales, notas de firmware y manuales técnicos del dispositivo, verifique los detalles con el fabricante en https://www.navtelecom.ru/ para que su instalación refleje la documentación y el comportamiento de firmware más reciente.
