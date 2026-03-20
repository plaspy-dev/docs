---
slug: /megastek/mt60x/configuration
id: mt60x-configuration
sidebar_label: Configuration
title: Megastek - MT60X Configuration
sidebar_class_name: menu_item_tracker
description: Configure el Megastek MT60X para usar con Plaspy, con ajustes de servidor, comandos SMS y guía práctica de instalación
keywords:
  - Configuración Megastek MT60X
  - Configuración MT60X
  - Configuración MT60X para Plaspy
  - Ajustes de servidor MT60X
  - Configuración de rastreador GPS Megastek
  - Configuración de brazalete de seguimiento
  - Configuración SMS MT60X
  - Configuración rastreador GPRS TCP IP
  - Integración de rastreadores con Plaspy
  - Configuración software de rastreo MT60X
---

# Megastek - Configuración MT60X

Esta página recopila la información pública y práctica necesaria para configurar el Megastek MT60X con Plaspy. Incluye los ajustes de servidor, los comandos SMS documentados públicamente y las pautas de flujo de trabajo para apuntar un MT60X al backend de Plaspy y habilitar el seguimiento en tiempo real y el reenvío de eventos.

Plaspy emplea ajustes de servidor compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador en el backend. Los pasos exactos en el dispositivo pueden variar según la versión de firmware, la variante de hardware, el tipo de instalación o las herramientas del proveedor, por lo que los comandos y flujos aquí deben considerarse como una guía práctica y pública, no como una lista de verificación exhaustiva para cada unidad MT60X.

## Resumen de configuración

La finalidad de configurar un MT60X para Plaspy es preparar el dispositivo para conectar vía GPRS al servidor central de Plaspy, validar la conectividad y permitir que las ubicaciones y las alarmas aparezcan en la plataforma. El modelo soporta configuración por SMS según la documentación pública y puede reenviar telemetría a un endpoint del servidor Plaspy en el puerto compartido usado por todos los dispositivos.

- Configure los parámetros de red del dispositivo para que el rastreador pueda abrir una sesión de datos GPRS hacia Plaspy.
- Ajuste el APN y las credenciales del operador para que el MT60X se conecte a la red móvil y pueda subir datos.
- Apunte el dispositivo al endpoint del servidor Plaspy y al puerto compartido utilizado por la plataforma.
- Active el modo GPRS y establezca un intervalo de reporte adecuado para visibilidad en tiempo real y auditoría.
- Verifique que el dispositivo informe correctamente en Plaspy para que los administradores confirmen la recepción de ubicaciones, alarmas y telemetría.

## Ajustes del servidor Plaspy

Al configurar el MT60X para comunicarse con Plaspy, use los siguientes ajustes públicos exactamente como se muestran:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888 depending on device choice
- Plaspy automatically detects the tracker protocol so the backend will handle protocol variants

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y que la detección automática de protocolo reduce la necesidad de seleccionar un protocolo en la plataforma.

## Requisitos previos

- Una unidad MT60X con alimentación, batería cargada y ranura SIM accesible si se requiere para GPRS.
- Una SIM de datos activa provisionada para GPRS con APN conocido y, opcionalmente, usuario y contraseña.
- Acceso al método de configuración del fabricante, como comandos SMS o software oficial de configuración.
- El IMEI del dispositivo disponible para usar en comandos de identificación o para el registro en Plaspy.
- Acceso administrativo a Plaspy para validar el reporte del dispositivo después de la configuración.
- Cobertura básica de la red móvil en la ubicación del dispositivo para permitir la conectividad GPRS.

## Cómo se conecta este rastreador a Plaspy

El MT60X envía actualizaciones de ubicación y telemetría de eventos al backend de Plaspy mediante una sesión de datos GPRS. En la práctica, el dispositivo se configura para subir paquetes al endpoint y puerto compartidos de Plaspy, de modo que la telemetría, las alarmas y las trazas de ubicación periódicas sean visibles en la consola de Plaspy.

- El rastreador abre una conexión GPRS y sube datos al endpoint y puerto del servidor Plaspy
- Correcciones de ubicación y datos híbridos GPS más LBS se envían a Plaspy para mapeo en tiempo real e historial
- Eventos de alarma como antirremoción o SOS se reenvían a Plaspy para activar notificaciones
- Los intervalos de reporte periódicos y las consultas de ubicación instantáneas permiten auditorías y monitoreo
- Plaspy recibe datos en el puerto compartido y detecta automáticamente el protocolo del rastreador para su parseo

## Flujo típico de configuración

Siga estos pasos públicos y prácticos para configurar un MT60X con conectividad a Plaspy. La interfaz exacta o el flujo por SMS pueden variar según el firmware o la herramienta del proveedor.

1. Acceda al método oficial de configuración de Megastek, ya sea la interfaz SMS del equipo o el software del fabricante.
2. Ingrese el servidor Plaspy como d.plaspy.com o utilice la IP del servidor Plaspy 54.85.159.138 en los ajustes del servidor del dispositivo.
3. Establezca el puerto en 8888, que es el puerto compartido utilizado por Plaspy para todos los dispositivos.
4. Elija UDP o TCP en el rastreador si el dispositivo le solicita seleccionar un protocolo de transporte.
5. Configure el APN del operador y cualquier usuario o contraseña del APN necesarios para datos GPRS.
6. Aplique o guarde la configuración y, si el dispositivo lo requiere, reinícielo para activar los nuevos ajustes.
7. Valide que el dispositivo informa a Plaspy comprobando la consola de Plaspy para ubicaciones y eventos en vivo.

## Ejemplos de comandos de configuración

El MT60X puede configurarse enviando comandos por SMS al dispositivo. Los comandos públicos de ejemplo que siguen usan la contraseña por defecto 000000. Reemplace los marcadores antes de enviar. Estos comandos se presentan en el mismo orden que la guía pública de configuración.

- Nota sobre la contraseña
  - La contraseña de dispositivo usada en estos comandos públicos de ejemplo es 000000. Si la unidad tiene otra contraseña, reemplace 000000 por la contraseña actual en cada comando.

- Nota sobre el uso del IMEI
  - Reemplace el marcador IMEI por el IMEI del dispositivo. El comando de identificación requiere los últimos 15 dígitos del IMEI. Use los últimos 15 dígitos como se muestra en el ejemplo.

1. Establecer el ID del dispositivo
   - Reemplace {{imei_last15}} por los últimos 15 dígitos del IMEI del dispositivo

```
M000000,22,{{imei_last15}}
```

   Explicación del ejemplo
   - Si el IMEI del dispositivo es 123456789012345 entonces envíe
```
M000000,22,123456789012345
```

2. Establecer el APN del operador
   - Reemplace [apn] por el APN de su SIM. Si su operador requiere usuario y contraseña, incluya [apnu] y [apnp] respectivamente

```
M000000,23,[apn]
```

   o con usuario y contraseña del APN
```
M000000,23,[apn],[apnu],[apnp]
```

3. Establecer el intervalo de reporte a 60 segundos

```
M000000,25,60
```

4. Establecer el servidor GPRS a Plaspy por IP
   - Este comando configura la entrada de servidor número 56 con la IP y puerto de Plaspy tal como se publica

```
M000000,24,56 54.85.159.138,8888
```

   - La guía pública anterior usa la IP del servidor Plaspy. También puede configurar d.plaspy.com cuando el firmware del dispositivo acepte un nombre de dominio para la entrada de host del servidor.

5. Habilitar el modo GPRS

```
M000000,21,2
```

Importante
- Envíe cada SMS desde un número autorizado si el rastreador aplica autorización por número de origen.
- Si cambia la contraseña del dispositivo desde el valor por defecto 000000, actualice los comandos SMS siguientes para usar la nueva contraseña.

## Notas de configuración

- Las versiones de firmware y las variantes de modelo pueden modificar la sintaxis exacta de los SMS o los códigos de comando soportados; verifique el conjunto de comandos para su firmware MT60X antes de enviar mensajes de configuración.
- La configuración por SMS es un método público habitual para dispositivos MT60X, pero puede existir software del fabricante o una herramienta de configuración que suele ser más sencilla para implementaciones a gran escala o de flota.
- Elija UDP o TCP en el dispositivo solo si este exige una selección explícita del transporte; Plaspy detectará automáticamente el protocolo del rastreador una vez que lleguen los datos al puerto compartido.
- Use el IMEI del dispositivo de forma consistente al registrar dispositivos en Plaspy y al crear el identificador en el rastreador.
- Confirme los valores de APN, usuario y contraseña con su operador móvil antes de configurar para evitar fallos de conectividad.

## Por qué usar Plaspy con esta configuración

Usar el Megastek MT60X con Plaspy ofrece a programas supervisados y operadores un camino sencillo para integrar ubicación en tiempo real, alarmas y telemetría. Los comandos SMS públicos de configuración y los ajustes de servidor compartidos de Plaspy facilitan el aprovisionamiento rápido de dispositivos y la validación centralizada de reportes en Plaspy para monitoreo en vivo, cumplimiento de geocercas y alertas basadas en eventos.

To learn more about Plaspy and how it handles device integrations visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time so please verify the latest setup guidance on the Megastek website at https://www.megastek.com/ before large scale deployments.
