---
slug: /topten/tk208/configuration
id: tk208-configuration
sidebar_label: Configuration
title: TopTen - TK208 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el TopTen TK208 con Plaspy, incluye ajustes de servidor y comandos SMS para integrar el dispositivo
keywords:
  - Configuración TopTen TK208
  - Configuración inicial TopTen TK208
  - Configuración TK208 para Plaspy
  - Configuración del rastreador GPS TopTen
  - Configuración de servidor TK208
  - Configuración de dispositivo Plaspy
  - Configuración SMS TK208
  - Configuración de rastreador OBD2
  - Configuración de rastreo de vehículos
  - Ajustes APN TK208
---

# TopTen - TK208 Configuración

Esta página documenta el contexto público de configuración para usar el TopTen TK208 con Plaspy. Reúne los ajustes de servidor de Plaspy y los comandos SMS conocidos y el flujo de trabajo usado para apuntar un TK208 a la plataforma Plaspy. Utilice esta guía para preparar el dispositivo y confirmar que reporta a Plaspy; no sustituye el manual completo del fabricante.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Las acciones de configuración por parte del fabricante para el TK208 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del distribuidor; la configuración del modelo que se muestra a continuación recoge los comandos SMS comunes y los marcadores de posición que están documentados públicamente para esta familia de dispositivos.

## Resumen de configuración

El TK208 se suele configurar para comunicarse con Plaspy enviando al dispositivo un conjunto reducido de comandos SMS de configuración o utilizando la herramienta oficial de TopTen cuando esté disponible. El objetivo principal es establecer el APN y el endpoint del servidor para que el rastreador pueda iniciar una sesión GPRS (datos) y enviar posiciones y eventos a Plaspy.

- Configure el TK208 para que apunte al endpoint del servidor Plaspy y pueda enviar datos de posición y eventos.
- Establezca el APN y las credenciales GPRS de la SIM instalada usando la configuración por SMS del dispositivo o el software del proveedor.
- Verifique el IMEI del dispositivo y el identificador del rastreador que utiliza Plaspy (el ID del rastreador se deriva del IMEI según lo descrito por el fabricante).
- Opcionalmente restaure la configuración de fábrica antes de una configuración nueva cuando sea necesario.
- Verifique que el dispositivo reporte correctamente a Plaspy y aparezca en la plataforma.

## Ajustes del servidor Plaspy

Al configurar el TK208 para Plaspy, utilice los siguientes ajustes públicos del servidor exactamente como se muestran:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP; el dispositivo puede configurarse para usar UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

Estos valores son los ajustes públicos del endpoint de Plaspy que debe ingresar en la configuración del rastreador o incluir en los comandos SMS de configuración.

## Requisitos previos

- Una unidad TK208 con alimentación y accesible, con una tarjeta SIM funcional que permita SMS y conexión de datos GPRS.
- APN, usuario APN y contraseña APN del operador móvil para completar la configuración del dispositivo (pueden aparecer marcadores como [apn], [apnu], [apnp]).
- Conocer el IMEI del dispositivo para identificar el ID del rastreador que reporta el equipo y que usa Plaspy.
- Acceso al método de comandos SMS del fabricante o al software/herramienta oficial de configuración de TopTen.
- Un teléfono capaz de enviar comandos SMS al rastreador si realiza la configuración por SMS.
- Acceso básico a la plataforma Plaspy para validar que el dispositivo está reportando después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El TK208 se configura para abrir una conexión GPRS y enviar sus datos de ubicación y eventos al endpoint y puerto del servidor Plaspy. Una vez que los ajustes del servidor y el APN están en su lugar, Plaspy recibe y decodifica los mensajes del rastreador y muestra la telemetría del dispositivo en la plataforma.

- El rastreador se apunta al endpoint d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.
- El transporte del dispositivo puede configurarse en UDP o TCP; se selecciona según el soporte del dispositivo y la preferencia del instalador.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta, por lo que especificar el servidor y el puerto es suficiente para el manejo del protocolo.
- El identificador de dispositivo que usa Plaspy corresponde al ID derivado del IMEI del equipo tal como se reporta en la salida PAR o como identificador basado en IMEI.
- Después de la configuración, el dispositivo envía actualizaciones de ubicación y mensajes de evento a Plaspy para supervisión operativa.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial de TopTen: comandos SMS o la herramienta de configuración del fabricante.
2. Verifique el IMEI del dispositivo y determine el identificador del rastreador (el TK208 usa el identificador derivado del IMEI descrito por el fabricante).
3. Ingrese el servidor de Plaspy como d.plaspy.com o use la IP 54.85.159.138 en el campo de servidor.
4. Establezca el puerto del dispositivo en 8888 y elija UDP o TCP si el equipo requiere selección de transporte.
5. Configure el APN y las credenciales GPRS (use el APN del operador y los marcadores de posición si es necesario).
6. Aplique o guarde la configuración y reinicie el dispositivo si el rastreador requiere un reinicio para que los ajustes tengan efecto.
7. Valide que el rastreador reporte a Plaspy y aparezca en la plataforma, comprobando la conectividad y la telemetría.

## Ejemplos de comandos de configuración

El TopTen TK208 admite configuración por SMS. Los siguientes comandos públicos se usan con frecuencia; envíelos como mensajes de texto desde un número telefónico administrativo al número SMS del dispositivo. Preserve los marcadores de posición según sea necesario.

- Restauración de fábrica inicial opcional (use solo cuando sea necesario):
```
111111CLR
```
- Establecer APN y parámetros del servidor GPRS y el intervalo de reporte (reemplazar marcadores por los valores del operador):
```
111111WWW:IPN:54.85.159.138;COM:8888;APN:[apn],[apnu],[apnp];RPT:60;SLP:60;RUN:2;
```
  - Explicación de marcadores:
    - [apn] = nombre del APN del operador móvil
    - [apnu] = usuario del APN si el operador lo requiere (dejar en blanco si no se usa)
    - [apnp] = contraseña del APN si el operador lo requiere (dejar en blanco si no se usa)
  - El comando anterior dirige el rastreador a la IP y puerto del servidor Plaspy e incluye parámetros de ejemplo de reporte y sueño según la documentación pública.

- Consultar la configuración WWW actual para verificar el servidor y el APN:
```
111111WWW:
```

Nota: La configuración pública indica que el ID del rastreador está asociado con los últimos 14 dígitos del IMEI tal como se informa en la salida PAR. Use el IMEI del dispositivo para determinar el identificador que Plaspy recibirá.

## Notas de configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar la sintaxis de los comandos o los parámetros disponibles; confirme siempre los comandos según la revisión de firmware cuando sea posible.
- El TK208 admite configuración por SMS además de las herramientas del fabricante; el SMS es útil cuando no hay acceso remoto al software de configuración.
- Elija UDP o TCP en función de su instalación y del comportamiento del operador; Plaspy detectará automáticamente el protocolo del rastreador una vez que el dispositivo se conecte.
- Plaspy usa el mismo puerto (8888) para todos los dispositivos compatibles, lo que simplifica la configuración de múltiples equipos.
- Mantenga las credenciales APN y la suscripción de la SIM activas y con datos habilitados para que el dispositivo pueda establecer la sesión GPRS.

## Por qué usar Plaspy con esta configuración

Configurar el TopTen TK208 para que reporte a Plaspy ofrece a las organizaciones visibilidad del vehículo, notificación de eventos y monitoreo centralizado usando un endpoint y puerto consistentes. Las funciones OBD2 y RFID opcionales del TK208 complementan la supervisión de flotas al aportar contexto del conductor y del vehículo junto con datos de posición y alarmas cuando se integran con una plataforma como Plaspy.

Para obtener más información sobre Plaspy y las opciones de integración de dispositivos compatibles, visite https://www.plaspy.com. Las especificaciones del fabricante, el comportamiento del firmware y los métodos de configuración pueden cambiar con el tiempo; verifique los detalles y comandos específicos del dispositivo más recientes con TopTen en http://www.t10.cn.
