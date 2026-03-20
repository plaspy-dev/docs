---
slug: /suntech/st4505/configuration
id: st4505-configuration
sidebar_label: Configuration
title: Suntech - ST4505 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Suntech ST4505 para compatibilidad con Plaspy y pasos prácticos de SMS y servidor
keywords:
  - Configuración Suntech ST4505
  - Instalación Suntech ST4505
  - Configuración ST4505 en Plaspy
  - Configuración del tracker Suntech OBD II
  - Ajustes de servidor ST4505
  - Configuración GPS Suntech ST4505
  - Configuración de tracker Plaspy
  - Telemetría vehicular ST4505
  - Configuración SMS ST4505
  - Configuración APN Suntech ST4505
---

# Suntech - Configuración del ST4505

Esta página documenta el contexto público de configuración para usar el Suntech ST4505 con Plaspy. Se centra en los ajustes y comandos prácticos que se usan habitualmente para apuntar un ST4505 a Plaspy, de modo que el dispositivo reporte ubicación y telemetría a la plataforma. Cuando se muestran pasos desde el lado del fabricante, reflejan comandos SMS públicos y patrones de parámetros disponibles públicamente, no herramientas privadas del proveedor.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del tracker. Los pasos exactos en el lado del fabricante para el ST4505 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; esta página explica el flujo de configuración público típico e incluye ejemplos de comandos SMS que se emplean con frecuencia en dispositivos ST4505.

## Resumen de la configuración

El objetivo al configurar un ST4505 para Plaspy es preparar el tracker para comunicarse de forma fiable con el backend de Plaspy, validar la conectividad y permitir la visibilidad en la plataforma. La configuración pública suele usar comandos SMS para establecer el APN y los detalles del servidor, o bien la herramienta de aprovisionamiento del fabricante cuando esté disponible.

- Establecer el APN del dispositivo y el destino GPRS/servidor para que el tracker pueda iniciar una sesión de datos y enviar paquetes a Plaspy.
- Configurar el identificador del dispositivo y el endpoint del servidor para que Plaspy pueda asociar el flujo de datos entrante con el dispositivo correcto.
- Elegir el transporte (UDP o TCP) y el puerto 8888 para coincidir con las expectativas del servidor Plaspy y asegurar que los paquetes se enruten correctamente.
- Validar los reportes y la telemetría confirmando que el dispositivo aparece como en línea en Plaspy después de la configuración.
- Opcionalmente ajustar los intervalos de reporte y los parámetros de latido para equilibrar capacidad de respuesta y uso de datos.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del tracker
- Todos los dispositivos en Plaspy usan el mismo puerto para reportar

## Requisitos típicos antes de la configuración

- Un ST4505 cargado y funcional instalado en el vehículo o en banco de pruebas para el aprovisionamiento inicial.
- Una tarjeta SIM con datos móviles activos y capacidad de SMS insertada en el dispositivo (credenciales APN si son necesarias).
- Acceso al método de configuración pública del fabricante, como el aprovisionamiento por comandos SMS o el software oficial de Suntech.
- El IMEI del dispositivo disponible para calcular el ID de dispositivo SUNTECH utilizado en los comandos SMS.
- Conocimiento de su APN, y opcionalmente del nombre de usuario y contraseña del APN si su operador requiere autenticación.
- Acceso básico a los datos de la cuenta de Plaspy para confirmar que el dispositivo aparece y está reportando tras la configuración.

## Cómo se conecta este tracker a Plaspy

El ST4505 envía fixes GNSS, telemetría OBD-II y eventos a través de redes celulares al backend de Plaspy. El tracker se configura para enviar sus paquetes al endpoint y puerto compartidos de Plaspy para que la plataforma ingiera y muestre datos en tiempo real para monitoreo e informes.

- El dispositivo se apunta a d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la preferencia del dispositivo; Plaspy acepta ambos y detectará el protocolo automáticamente.
- La telemetría, las actualizaciones de ubicación y los reportes de eventos se envían en los intervalos configurados para que Plaspy ofrezca seguimiento en vivo y alertas.
- Los identificadores del dispositivo establecidos durante el aprovisionamiento permiten a Plaspy asociar los paquetes con la cuenta y el activo correctos.
- Tras una configuración exitosa, el tracker debería aparecer como en línea y comenzar a enviar datos a Plaspy para visualización y registros históricos.

## Flujo de configuración común

1. Acceda al método oficial de configuración Suntech documentado para el ST4505, normalmente el aprovisionamiento por SMS o la herramienta del proveedor.
2. Ingrese la dirección del servidor Plaspy como d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor/GPRS del dispositivo.
3. Establezca el puerto de destino en 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles).
4. Elija el protocolo de transporte UDP o TCP si el dispositivo requiere selección explícita.
5. Configure el APN y la autenticación APN opcional (usuario y contraseña) según su operador móvil.
6. Aplique o guarde la configuración y reinicie el dispositivo si el ST4505 requiere reboot para aplicar cambios.
7. Valide que el dispositivo reporte a Plaspy verificando el estado del dispositivo en Plaspy y confirmando que se reciben mensajes de telemetría y ubicación.

## Comandos de configuración de ejemplo

El ST4505 soporta aprovisionamiento por SMS usando cadenas de comando. Los comandos públicos proporcionados por el fabricante que se muestran a continuación son plantillas típicas enviadas al dispositivo por SMS. El ID de dispositivo usado en estos comandos son los últimos 6 dígitos del IMEI después de eliminar el último dígito del IMEI (es decir, quite el último dígito del IMEI y, a continuación, tome los 6 dígitos finales). Ejemplo: si el IMEI es 123456789012345 entonces elimine el 5 final para obtener 12345678901234 y el ID de dispositivo es 901234.

- Establecer el APN del operador y el servidor GPRS (reemplace DEVICEID con el ID calculado; configure los campos APN según su operador; ponga auth_flag a 1 si suministra {{apnu}} o {{apnp}}, de lo contrario póngalo a 0):

```
SA200NTW;DEVICEID;02;[auth_flag];{{apn}};{{apnu}};{{apnp}};54.85.159.138;8888;;;;
```

- Ajustar el intervalo de reporte/actualización a 60 segundos (reemplace DEVICEID como se indicó arriba):

```
SA200RPT;DEVICEID;02;60;60;60;3;0;0;0;0;0
```

- Verificar o consultar la configuración preestablecida actual (reemplace DEVICEID como se indicó arriba):

```
SA200CMD;DEVICEID;02;PresetA
```

Notas sobre los marcadores:
- DEVICEID — calcular a partir del IMEI quitando el último dígito del IMEI y tomando los seis dígitos finales (ver ejemplo arriba).
- {{apn}} — la cadena APN de su operador móvil.
- {{apnu}} — nombre de usuario del APN si el operador lo exige; mantenga el marcador si no se utiliza.
- {{apnp}} — contraseña del APN si el operador lo exige; mantenga el marcador si no se utiliza.
- [auth_flag] — ponga 1 si provee usuario o contraseña del APN, de lo contrario 0.

Envíe cada uno de los comandos SMS desde un número de teléfono autorizado por el dispositivo (siga la guía de aprovisionamiento de Suntech). Respete el orden de los comandos cuando sea pertinente; por lo general conviene aplicar el comando de red/APN antes o al mismo tiempo que la configuración de servidor/puerto para asegurar conectividad fiable.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar el formato o comportamiento de los comandos; confirme siempre la sintaxis con la documentación Suntech más reciente.
- El ST4505 soporta la configuración por SMS como se muestra, pero los proveedores también pueden ofrecer aprovisionamiento por USB o mediante software; utilice el método oficial provisto con su equipo.
- Elija UDP o TCP según las necesidades de la instalación; Plaspy acepta ambos y detectará el protocolo, pero la elección de transporte puede afectar características de entrega.
- Confirme los valores de APN, {{apnu}} y {{apnp}} con el operador de la SIM antes de aprovisionar; una configuración incorrecta del APN impide la sesión de datos.
- Plaspy utiliza el puerto 8888 para todos los dispositivos y detecta automáticamente el protocolo del tracker, por lo que mantener ajustes consistentes de servidor/puerto es importante para visibilidad inmediata.

## Por qué usar Plaspy con esta configuración

Configurar el Suntech ST4505 para que reporte a Plaspy ofrece a los operadores de flota y a los equipos de telemetría acceso inmediato a ubicación, telemetría OBD-II y datos de eventos en una plataforma centralizada. La combinación de instalación plug-and-play OBD-II y los comandos SMS públicos mostrados aquí acelera los despliegues y permite que Plaspy ingiera y muestre seguimiento en vivo, diagnósticos y alertas para supervisión operativa.

Learn more about Plaspy and how it supports device integration and fleet workflows at https://www.plaspy.com. For device-specific command syntax, firmware changes, and the latest manufacturer guidance always verify details on the official Suntech site http://www.suntechint.com/ as procedures and firmware behavior can change over time.
