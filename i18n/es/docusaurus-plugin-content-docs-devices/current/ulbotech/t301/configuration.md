---
slug: /ulbotech/t301/configuration
id: t301-configuration
sidebar_label: Configuration
title: Ulbotech - T301 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Ulbotech T301 para apuntarlo a Plaspy y habilitar seguimiento en tiempo real
keywords:
  - configuración Ulbotech T301
  - configuración T301
  - configuración T301 Plaspy
  - ajustes de servidor Ulbotech T301
  - configuración de rastreador GPS T301
  - configuración seguimiento de flotas T301
  - configuración de dispositivo Plaspy
  - integración rastreador GPS Plaspy
  - configuración rastreador de vehículo
  - configuración GPS Ulbotech
---

# Ulbotech - Configuración del T301

Esta página documenta el contexto público de configuración para usar el rastreador Ulbotech T301 con Plaspy. Explica los ajustes de servidor que Plaspy requiere, describe el flujo habitual para apuntar un T301 a Plaspy y detalla los prerrequisitos que debe confirmar antes de integrar un dispositivo a una flota en Plaspy. Use esta guía para entender cómo interoperar el T301 con la plataforma Plaspy para seguimiento en tiempo real e informe de eventos.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que al T301 solo se le debe indicar el endpoint y el puerto de Plaspy. Los pasos exactos en el lado del fabricante para cambiar servidor, transporte o aplicar actualizaciones de firmware pueden variar según la versión del firmware, revisión de hardware, tipo de instalación y herramientas del proveedor; confirme siempre con la documentación de Ulbotech cuando sea necesario.

## Resumen de configuración

El objetivo de la configuración es dejar al T301 listo para enviar de forma fiable posiciones GNSS y telemetría de eventos a Plaspy a través del canal de datos móviles. La configuración se centra en establecer el endpoint de Plaspy, seleccionar el tipo de transporte cuando sea necesario y validar que los reportes lleguen a la plataforma.

- Apuntar el dispositivo al servidor de Plaspy para que los datos de ubicación lleguen a su cuenta.
- Configurar el transporte y el puerto que el dispositivo usará para el envío de datos.
- Verificar la conectividad por GPRS y comprobar que antenas y alimentación estén correctamente conectadas.
- Confirmar que eventos del dispositivo como ACC, SOS, entrada analógica AD y reportes de inmovilizador sean visibles en Plaspy.
- Validar la visibilidad y la telemetría del dispositivo en el panel de Plaspy tras la configuración.

## Ajustes del servidor de Plaspy

Al configurar el T301 para Plaspy, utilice los siguientes ajustes públicos de servidor:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles y que la plataforma detecta automáticamente el protocolo que utiliza el rastreador una vez que se conecta.

## Requisitos habituales antes de la configuración

- Un T301 encendido y funcional, con antenas y cableado del vehículo instalados según corresponda.
- Una SIM de datos GSM activa provisionada para GPRS si va a usar enlace móvil.
- Acceso al método o software oficial de configuración Ulbotech (herramienta de configuración por micro USB o configuración remota proporcionada por el proveedor).
- Conocimiento de los ajustes del servidor Plaspy d.plaspy.com o 54.85.159.138 y del puerto 8888.
- Acceso físico al dispositivo al menos una vez para la configuración inicial y verificación.
- Opcional: información de la versión de firmware para confirmar compatibilidad con el flujo de trabajo de configuración elegido.

## Cómo se conecta este rastreador a Plaspy

El T301 envía posiciones GNSS y telemetría de eventos mediante la conexión de datos celulares (GPRS) al endpoint y puerto compartidos de Plaspy. Una vez que el dispositivo está configurado para reportar a Plaspy, la plataforma ingiere los datos y presenta la ubicación, estado y eventos en paneles y reportes.

- El rastreador informa posiciones a d.plaspy.com (o 54.85.159.138) en el puerto 8888.
- El transporte puede configurarse como UDP o TCP en el dispositivo; Plaspy acepta ambos.
- Plaspy detecta automáticamente el protocolo y parsea los mensajes entrantes del rastreador.
- Los eventos ACC, SOS, entrada analógica AD y de inmovilizador se transmiten como mensajes de evento a Plaspy.
- Tras la conexión exitosa, la visibilidad del vehículo, las alertas y la telemetría aparecen en la plataforma Plaspy.

## Flujo común de configuración

1. Acceda al método o software oficial de configuración Ulbotech (por ejemplo, la herramienta de configuración por micro USB o la interfaz de configuración remota del proveedor).
2. Localice la sección de ajustes de servidor o reporte en la herramienta de configuración del dispositivo.
3. Ingrese el dominio de servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 como destino.
4. Establezca el valor de puerto a 8888 para el uplink del dispositivo.
5. Elija UDP o TCP si el dispositivo requiere selección de transporte; Plaspy acepta cualquiera de los dos.
6. Aplique o guarde los cambios de configuración en la herramienta y cárguelos en el rastreador.
7. Reinicie o haga power-cycle al T301 si el dispositivo o el firmware requieren reinicio para aplicar ajustes.
8. Valide que el dispositivo reporta a Plaspy comprobando que el rastreador aparezca y envíe telemetría en la interfaz de Plaspy.

## Ejemplos de comandos de configuración

La configuración del modelo T301 que se muestra aquí no incluye cadenas de comandos públicas. Los comandos exactos y la sintaxis pueden variar según el firmware de Ulbotech y las herramientas del proveedor. Use la utilidad oficial de configuración de Ulbotech o los métodos de comando remoto soportados por el dispositivo para establecer los parámetros de servidor y transporte. Si dispone de un conjunto de comandos del fabricante, aplique el dominio de servidor d.plaspy.com o la IP 54.85.159.138 y el puerto 8888, y luego verifique la conectividad.

## Notas de configuración

- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador después de la primera conexión.
- Diferentes versiones de firmware o revisiones de hardware del T301 pueden exponer los ajustes de configuración en menús distintos; consulte la documentación de Ulbotech para instrucciones específicas por versión.
- La elección entre UDP o TCP puede depender de las condiciones de red o de la preferencia del instalador; Plaspy acepta ambos transportes.
- La configuración puede aplicarse mediante la herramienta de configuración por micro USB o por canal de comando remoto según el firmware del T301 y la instalación.
- Confirme siempre la sintaxis de comando y los pasos actuales con la documentación de Ulbotech antes de aplicar cambios.

## Por qué usar Plaspy con esta configuración

Usar el T301 con Plaspy ofrece un camino directo para obtener localización en tiempo real del vehículo, alertas de eventos y telemetría operativa para gestores de flota y propietarios de vehículos. Apuntar el rastreador a Plaspy permite a despachadores y administradores monitorear posición, estado de ACC/encendido, eventos SOS y telemetría analógica AD en una sola plataforma diseñada para supervisión de flotas.

Para conocer más sobre Plaspy y ver las funciones de la plataforma disponibles para el T301, visite https://www.plaspy.com. Para obtener los comandos específicos más recientes del dispositivo, comportamiento del firmware y detalles de configuración del fabricante, verifique la información en el sitio de Ulbotech http://www.ulbotech.com/ ya que las especificaciones y métodos de configuración pueden cambiar con el tiempo.
