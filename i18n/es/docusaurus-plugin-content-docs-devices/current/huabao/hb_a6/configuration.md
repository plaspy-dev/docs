---
slug: /huabao/hb_a6/configuration
id: hb_a6-configuration
sidebar_label: Configuration
title: Huabao - HB-A6 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Huabao HB-A6 con Plaspy, incluye ajustes de servidor y pasos de instalación
keywords:
  - Configuración Huabao HB A6
  - Configuración HB A6 Plaspy
  - Configuración rastreador GPS Huabao
  - Ajustes de servidor HB A6
  - Guía de instalación Huabao HB A6
  - Configuración plataforma HB A6
  - Rastreador vehicular Huabao Plaspy
  - Configuración SIM HB A6
  - Configuración plataforma GPS Huabao
  - Configuración seguimiento de flotas HB A6
---

# Huabao - Configuración HB-A6

Esta página describe el contexto público de configuración para utilizar el rastreador GPS Huabao HB-A6 con la plataforma Plaspy. Explica los ajustes de servidor compartidos por Plaspy, qué debe revisar antes de la integración y los pasos prácticos para apuntar un dispositivo HB-A6 a Plaspy, de modo que el equipo publique ubicación y telemetría para mapeo, alertas e informes.

Plaspy utiliza ajustes de servidor comunes entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos de configuración en el lado del fabricante para el HB-A6 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, así que siga la interfaz de configuración del proveedor mientras aplica los valores de servidor de Plaspy que se describen a continuación.

## Resumen de la configuración

El objetivo al configurar un HB-A6 para Plaspy es asegurar que el rastreador pueda alcanzar el endpoint del servidor de Plaspy de forma fiable a través de su enlace celular 2G, reportar posiciones GPS/BDS y enviar telemetría de eventos y E/S para que los dispositivos aparezcan y funcionen correctamente dentro de la plataforma Plaspy.

- Configure el dispositivo para enviar paquetes TCP o UDP a Plaspy para que se reciban ubicaciones y eventos.
- Proporcione una SIM activa y conectividad de red para que el HB-A6 pueda conectarse por 2G.
- Establezca el nombre de host o la IP del servidor Plaspy y el puerto común usado por Plaspy para todos los dispositivos.
- Verifique que la telemetría como ACC (ignición), SOS y eventos de relé lleguen a Plaspy.
- Pruebe y confirme que el dispositivo sea visible en Plaspy y que las alertas se activen correctamente.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de Plaspy al configurar el HB-A6:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured to use either transport on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

Todos los dispositivos en Plaspy usan el mismo puerto, y la detección automática de protocolo de Plaspy simplifica los despliegues con múltiples proveedores.

## Requisitos habituales antes de la configuración

- Tarjeta SIM activa instalada y aprovisionada para acceso de datos 2G si el dispositivo opera en redes 2G
- Fuente de alimentación para el HB-A6 y cualquier batería externa requerida según la instalación
- Acceso a la herramienta oficial de configuración Huabao o a la interfaz de configuración del dispositivo proporcionada por el proveedor o instalador
- Antena GPS correctamente conectada y cualquier cableado de sensores externos que vaya a utilizar
- Dirección y puerto del servidor Plaspy objetivo (d.plaspy.com o 54.85.159.138 y puerto 8888) anotados antes de realizar cambios
- Acceso administrativo al dispositivo o soporte del instalador para guardar y aplicar los ajustes

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el HB-A6 transmite posicionamiento GPS/BDS y telemetría a bordo por su enlace celular 2G al endpoint y puerto compartido de Plaspy. Plaspy recibe el flujo del dispositivo, analiza el protocolo automáticamente y muestra ubicación, eventos y datos de sensores en la plataforma.

- El dispositivo envía paquetes de posición periódicos a d.plaspy.com o 54.85.159.138 en el puerto 8888
- La telemetría como ACC, alarmas SOS, estado de relé y lecturas de sensores externos se incluyen en los reportes del dispositivo
- Eventos y alarmas se envían a Plaspy donde la lógica de mapeo, alertas e informes puede procesarlos
- La detección automática de protocolos de Plaspy identifica el protocolo de reporte del HB-A6, por lo que no se requiere selección manual de protocolo en el servidor
- El HB-A6 admite UDP o TCP; elija el transporte que requiera su instalación

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de Huabao o al software proporcionado por el proveedor o instalador.
2. En los ajustes de servidor del dispositivo ingrese la dirección del servidor Plaspy como d.plaspy.com o la IP 54.85.159.138.
3. Establezca el puerto de destino en 8888, que es el puerto compartido por Plaspy para todos los dispositivos compatibles.
4. Seleccione UDP o TCP si la configuración del dispositivo requiere elegir un protocolo de transporte.
5. Aplique o guarde los cambios de configuración en la herramienta de Huabao o en la interfaz del dispositivo.
6. Reinicie el dispositivo si la herramienta o el firmware lo requieren para que los nuevos ajustes de red entren en efecto.
7. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma con ubicación y la telemetría esperada.

Siga el mismo procedimiento para dispositivos adicionales; Plaspy gestionará la detección de protocolo y el enrutamiento.

## Ejemplos de comandos de configuración

El HB-A6 puede configurarse usando las herramientas oficiales de Huabao o comandos SMS/serie dependiendo del firmware y las herramientas del proveedor. La sintaxis exacta de los comandos varía según el firmware y la herramienta del fabricante, así que consulte la guía de configuración de Huabao para el HB-A6 que recibió.

Si su proveedor suministra comandos de configuración por SMS o un conjunto de comandos seriales para el HB-A6, aplique los ajustes del servidor Plaspy mostrados más arriba (d.plaspy.com o 54.85.159.138 y puerto 8888) en los parámetros correspondientes. Por ejemplo, un patrón de comando genérico utilizado por algunos dispositivos Huabao podría aceptar el servidor y el puerto como parámetros; adapte este patrón según el manual del equipo:

- Reemplace <server> con d.plaspy.com o 54.85.159.138
- Reemplace <port> con 8888
- Elija TCP o UDP según lo requiera su instalación

Debido a que la sintaxis de comandos difiere entre versiones de firmware, utilice la documentación oficial de Huabao o la utilidad de configuración proporcionada por su proveedor para formatear y enviar los comandos.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los comandos de configuración disponibles y la ubicación de los menús; siempre consulte el manual del HB-A6 para la revisión exacta de su modelo.
- Elija UDP para menor sobrecarga y entrega de paquetes más rápida cuando sea aceptable, o TCP cuando necesite fiabilidad de conexión; ambos transportes son compatibles en el puerto 8888.
- Confirme los ajustes de APN y los permisos de datos de la SIM si el dispositivo no puede establecer conexión celular; los valores de APN deben coincidir con el operador móvil.
- Pruebe en un área con cobertura 2G conocida para validar la conexión y el primer fijado GPS antes de desplegar los dispositivos en ubicaciones remotas o de difícil acceso.
- Si utiliza configuración por SMS, contemple retrasos de propagación y verifique los ajustes mediante una conexión directa o la herramienta de Huabao si está disponible.

## Por qué usar Plaspy con esta configuración

Usar el HB-A6 con Plaspy ofrece rastreo en tiempo real y reporte de eventos práctico y rentable para flotas, vehículos de renta y remolques. La telemetría del dispositivo —como ACC, SOS, control de relé y entradas de sensores externos—, combinada con el mapeo y las alertas de Plaspy, brinda a los operadores visibilidad sobre ubicación, eventos de seguridad y estado operativo.

Para saber más sobre Plaspy y cómo se usan los datos del HB-A6 en la plataforma visite https://www.plaspy.com. Para instrucciones de configuración específicas del HB-A6, notas de firmware y guía del fabricante consulte https://www.huabaotelematics.com/ ya que los métodos de configuración del fabricante y el comportamiento del firmware pueden cambiar con el tiempo.
