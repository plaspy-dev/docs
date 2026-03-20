---
slug: /gotop/vt_380a/configuration
id: vt_380a-configuration
sidebar_label: Configuration
title: GOTOP - VT-380A Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para GOTOP VT-380A con ajustes de servidor Plaspy y pasos prácticos para integrar el seguimiento de flotas
keywords:
  - configuración GOTOP VT-380A
  - configuración inicial GOTOP VT-380A
  - configuración de servidor VT-380A
  - configuración VT-380A para Plaspy
  - configuración del rastreador GPS GOTOP
  - guía de configuración de rastreo de vehículos
  - ajustes de servidor para rastreador GPS
  - configuración de plataforma de seguimiento de flotas
  - integración de rastreadores con Plaspy
  - flujo de configuración de rastreadores
---

# GOTOP - VT-380A — Configuración

En esta página encontrará el contexto público de configuración para usar el rastreador GOTOP VT-380A con Plaspy. Se resumen los valores de servidor necesarios y los pasos prácticos típicos para apuntar el VT-380A a Plaspy, de modo que el dispositivo pueda enviar posición y eventos a la plataforma. El contenido se basa en la capacidad del VT-380A para obtener posición GPS y usar GPRS sobre la red móvil para entregar esos datos a un endpoint de servidor.

Plaspy utiliza valores de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía para identificar los valores específicos de Plaspy que aplicará mediante las herramientas de configuración GOTOP o el método de gestión que le proporcione su proveedor.

## Resumen de la configuración

El objetivo al configurar un VT-380A para Plaspy es garantizar que el rastreador establezca una conexión GPRS confiable y entregue datos GPS en tiempo real o almacenados al endpoint común de Plaspy, de modo que el equipo aparezca y funcione correctamente en la plataforma de flotas.

- Configure el VT-380A para reportar al endpoint de servidor de Plaspy y que los mensajes de posición y eventos sean entregados.
- Asegure conectividad de datos móviles y alimentación estable para que el reporte en vivo no se interrumpa.
- Valide la configuración de transporte (UDP o TCP) y el puerto de servidor para que Plaspy acepte los mensajes.
- Confirme que el rastreador sea visible en Plaspy y que reporte actualizaciones de posición y eventos de conductor o alarmas.
- Utilice las herramientas oficiales GOTOP o los comandos SMS/console documentados por el fabricante para aplicar los ajustes.

## Valores de servidor de Plaspy

Use los siguientes valores de servidor de Plaspy al configurar el VT-380A. Estos valores se comparten entre los dispositivos soportados y son los endpoints públicos correctos para la integración con Plaspy.

- Dominio de servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma maneja la detección de protocolo para los modelos de rastreadores soportados.

## Requisitos típicos antes de la configuración

- Una unidad VT-380A con alimentación lista para configuración e instalación.
- Una tarjeta SIM válida con datos móviles habilitados y facturación configurada para uso GPRS.
- Acceso al método oficial de configuración GOTOP, como el software del proveedor, la guía de comandos SMS o la consola del dispositivo.
- Conocimiento de la versión de firmware del equipo y de los requisitos de las herramientas del proveedor que puedan afectar comandos o menús.
- Acceso físico para pruebas iniciales y verificación de recepción GPS y señal celular.
- Credenciales o acceso administrativo requeridos por la herramienta del fabricante para cambiar ajustes de red o servidor.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado para Plaspy, el VT-380A envía datos GPS y de eventos almacenados o en tiempo real al endpoint y puerto compartido de Plaspy. Plaspy recibe esos paquetes y mapea el protocolo del dispositivo a la cuenta del cliente.

- El rastreador envía mensajes de posición, estado y eventos por GPRS a d.plaspy.com o a la IP 54.85.159.138.
- Las comunicaciones se envían por el puerto 8888 usando UDP o TCP según la selección del dispositivo y la fiabilidad de la red.
- Plaspy detecta automáticamente el protocolo del VT-380A, por lo que se puede usar el mismo puerto para varios dispositivos.
- Las coordenadas almacenadas en la memoria interna se reenvían cuando GPRS se restablece, permitiendo continuidad en el historial de seguimiento.
- El reporte de eventos como alarmas o mensajes de identificación de conductor será reenviado a Plaspy para visibilidad en la plataforma y generación de alertas.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración GOTOP o al software proporcionado por el fabricante o vendedor.
2. Ingrese el servidor de Plaspy como el dominio d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto del dispositivo en 8888, que es el puerto objetivo usado por Plaspy para todos los equipos.
4. Elija el protocolo de transporte UDP o TCP si el VT-380A solicita una selección durante la configuración.
5. Configure el APN o los detalles de conectividad de la red móvil requeridos usando la herramienta GOTOP o comandos SMS según corresponda.
6. Aplique o guarde la configuración y reinicie el equipo si las instrucciones del fabricante recomiendan un reinicio.
7. Verifique que el VT-380A reporte a Plaspy revisando la actividad del dispositivo en la plataforma y confirmando la llegada de posiciones o eventos.

## Ejemplos de comandos de configuración

El conjunto exacto de comandos y la sintaxis para el VT-380A dependen de las herramientas del fabricante o la versión de firmware. Muchos dispositivos GOTOP son configurables mediante software del proveedor o cadenas de comandos SMS; las acciones públicas típicas que realizará son apuntar el equipo a d.plaspy.com o 54.85.159.138 y establecer el puerto 8888 con UDP o TCP.

Al usar comandos SMS o de texto según la documentación GOTOP, comúnmente:

- Se establece el dominio o IP del servidor apuntando a Plaspy
- Se configura el puerto de reporte en 8888
- Se selecciona transporte UDP o TCP si es requerido
- Se guarda o activa la nueva configuración

Dado que los formatos de firmware y los comandos SMS varían, consulte el manual del GOTOP VT-380A o la guía del proveedor para la sintaxis exacta de los comandos para establecer servidor, puerto y transporte. Plaspy aceptará conexiones dirigidas a d.plaspy.com o 54.85.159.138 en el puerto 8888.

## Notas de configuración

- Las versiones de firmware y las utilidades del proveedor pueden cambiar la sintaxis de comandos y la ubicación de menús; verifique la versión de firmware de su VT-380A antes de aplicar comandos.
- Elija UDP para menor sobrecarga y transmisiones a menudo más rápidas, o TCP cuando necesite comportamiento de entrega garantizada; pruebe ambos si las condiciones de red son inciertas.
- Si configura mediante SMS, asegúrese de que la SIM tenga SMS habilitados y tenga precaución con los mensajes de confirmación de comandos.
- La memoria interna del VT-380A almacenará puntos GPS cuando no haya GPRS y los reenviará una vez que la conexión a d.plaspy.com en el puerto 8888 se restablezca.
- Consulte siempre la documentación oficial GOTOP para anotaciones específicas del modelo sobre identificación de conductor, comportamiento de alarmas y cableado opcional del micrófono.

## Por qué usar Plaspy con esta configuración

Usar el VT-380A con Plaspy ofrece una forma directa de centralizar la posición de los vehículos, eventos de identificación de conductor y notificaciones de alarma en una sola plataforma de gestión de flotas. Apuntar el VT-380A a Plaspy con los ajustes de servidor compartidos facilita el onboarding de múltiples equipos y simplifica el soporte, ya que Plaspy detecta automáticamente los protocolos de los rastreadores soportados.

Para obtener más información sobre Plaspy y las integraciones soportadas visite https://www.plaspy.com y confirme las instrucciones específicas más recientes del GOTOP VT-380A en el sitio del fabricante https://www.gotop.cc/. Las especificaciones y métodos de configuración del fabricante pueden cambiar con el tiempo, por lo que es recomendable revisar la documentación oficial de GOTOP para la guía de configuración más actual.
