---
slug: /topten/tk428/configuration
id: tk428-configuration
sidebar_label: Configuration
title: TopTen - TK428 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador TopTen TK428 OBD II y cómo conectarlo a Plaspy con ajustes de servidor compartido
keywords:
  - Configuración TopTen TK428
  - Configuración TK428
  - TK428 Plaspy
  - Configuración rastreador GPS TopTen
  - Configuración TK428 OBD2
  - rastreo vehicular TK428
  - ajustes de servidor TK428
  - configuración de rastreador Plaspy
  - configuración plataforma GPS TK428
  - gestión de flotas TK428
---

# TopTen - Configuración del TK428

Esta página documenta el contexto público de configuración para usar el rastreador OBD II TopTen TK428 con Plaspy. Consolida los pasos y comandos públicamente disponibles para dirigir el dispositivo a los servidores de Plaspy y explica el flujo de trabajo que puede seguir para validar la conectividad y la visibilidad del equipo en la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador al conectarse. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que esta guía se centra en los pasos públicos prácticos y en los valores de servidor de Plaspy que deberá aplicar.

## Resumen de la configuración

El TK428 es un rastreador OBD II plug-and-play que puede prepararse para reportar ubicación y telemetría del vehículo a un servidor remoto. El proceso de configuración pública garantiza que el dispositivo tenga el APN y los ajustes de servidor correctos, que se conozca el identificador del dispositivo y que usted pueda verificar que Plaspy lo detecta.

- Configure el rastreador para reportar al endpoint y puerto del servidor de Plaspy.
- Proporcione los parámetros APN y GPRS correctos para que el dispositivo pueda conectarse a datos móviles.
- Use el identificador derivado del IMEI para que Plaspy pueda emparejar el equipo con los datos entrantes.
- Valide la conectividad y que el dispositivo aparezca en la plataforma Plaspy.
- Opcionalmente, use comandos SMS para configuración y verificación si el rastreador los soporta.

## Ajustes de servidor de Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: UDP o TCP (ambos soportados)
- Plaspy detecta automáticamente el protocolo del rastreador
- Todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos habituales antes de la configuración

- Acceso al puerto OBD II del vehículo para alimentar y conectar el TK428.
- Una tarjeta SIM funcional con datos móviles y capacidad de SMS, y las credenciales APN de ese operador.
- Tener a mano el número IMEI del dispositivo (se usa para derivar el identificador del rastreador).
- Acceso al método oficial de configuración de TopTen, como comandos SMS o software del proveedor.
- Permisos básicos para enviar SMS de prueba y reiniciar el rastreador si es necesario.

## Cómo se conecta este rastreador a Plaspy

El TK428 envía su posición y la telemetría disponible al endpoint y puerto compartidos de Plaspy para que la plataforma pueda procesar y mostrar los datos del dispositivo. La identificación se realiza usando el ID del rastreador derivado del IMEI y Plaspy reconoce automáticamente el protocolo que emplea el dispositivo.

- El rastreador se configura para reportar a d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.
- Los datos se envían por UDP o TCP según la configuración del dispositivo y las condiciones de la red.
- El identificador del dispositivo corresponde a los últimos 14 dígitos del IMEI, tal como se informa con el comando PAR del dispositivo.
- Debe configurarse el APN y los parámetros GPRS para que el rastreador establezca una sesión de datos con el servidor de Plaspy.
- Plaspy detectará automáticamente el protocolo del rastreador una vez que el dispositivo se conecte al endpoint de la plataforma.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de TopTen o al software documentado por el fabricante (comandos SMS o herramienta del proveedor).
2. Obtenga el IMEI del dispositivo y derive el identificador del rastreador (TopTen usa los últimos 14 dígitos).
3. Ingrese el servidor de Plaspy como d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del dispositivo.
4. Configure el puerto en 8888 en la configuración del equipo (Plaspy utiliza el mismo puerto para todos los dispositivos).
5. Seleccione UDP o TCP si el dispositivo requiere una selección explícita del transporte.
6. Aplique o guarde la configuración y reinicie el equipo si el fabricante lo exige.
7. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma usando el identificador derivado del IMEI.

## Ejemplos de comandos de configuración

La configuración pública de TopTen admite comandos vía SMS. Los siguientes son ejemplos públicos para restablecer valores de fábrica y configurar APN y servidor GPRS. El prefijo mostrado (111111) es la contraseña SMS utilizada en estos ejemplos según las instrucciones del fabricante.

- Reinicio inicial opcional para restaurar ajustes de fábrica:
```text
111111CLR
```

- Establecer APN y servidor GPRS para apuntar el dispositivo a Plaspy. Este comando define la IP del servidor, el puerto y los parámetros APN. Conserve los marcadores [apn], [apnu] y [apnp] y reemplácelos por el APN, usuario y contraseña de su SIM según sea necesario:
```text
111111WWW:IPN:54.85.159.138;COM:8888;APN:[apn],[apnu],[apnp];RPT:60;SLP:60;RUN:2;
```

- Verificar o consultar la configuración WWW actual en el dispositivo:
```text
111111WWW:
```

Notas sobre los marcadores:
- [apn] es el nombre del APN de su operador móvil.
- [apnu] es el nombre de usuario del APN si su operador lo requiere.
- [apnp] es la contraseña del APN si su operador la requiere.

La documentación del fabricante indica que el ID del rastreador usado por Plaspy corresponde a los últimos 14 dígitos del IMEI de 15 dígitos. Por ejemplo, si el IMEI tiene 15 dígitos, el identificador son los caracteres IMEI del 2 al 15.

## Notas de configuración

- Las versiones de firmware y las revisiones de hardware pueden cambiar el formato exacto de los comandos y los parámetros disponibles. Confirme siempre la sintaxis de los comandos con la documentación de TopTen correspondiente a su revisión del dispositivo.
- Los comandos de ejemplo arriba usan configuración por SMS según materiales públicos de TopTen. Las herramientas del proveedor pueden ofrecer métodos alternativos.
- Elija UDP o TCP según las necesidades de su implementación; ambos son compatibles con el dispositivo y con Plaspy en el puerto 8888.
- Los marcadores de APN deben reemplazarse con los valores exactos de su operador móvil para habilitar la conectividad GPRS.
- Si realiza un restablecimiento de fábrica, vuelva a aplicar los ajustes de servidor y APN y luego valide la conectividad.

## Por qué usar Plaspy con esta configuración

Usar el TK428 con Plaspy permite un manejo consistente en servidor de la telemetría entrante desde dispositivos OBD II y ofrece una única plataforma para la visibilidad de la ubicación y los datos del vehículo. Para operadores de flotas y administradores de vehículos, esta configuración ayuda a centralizar el seguimiento en tiempo real y a correlacionar datos ECU del vehículo con la ubicación para obtener información operativa.

Para obtener más información sobre Plaspy y cómo la plataforma procesa los datos de los dispositivos, visite https://www.plaspy.com. Verifique los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante en el sitio oficial de TopTen http://www.t10.cn, ya que las especificaciones y formatos de comando pueden cambiar con el tiempo.
