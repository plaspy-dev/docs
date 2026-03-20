---
slug: /teltonika/fmm880/configuration
id: fmm880-configuration
sidebar_label: Configuration
title: Teltonika - FMM880 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Teltonika FMM880 y conectarlo al servidor Plaspy con ajustes y comandos de ejemplo
keywords:
  - Configuración Teltonika FMM880
  - Instalación Teltonika FMM880
  - Configuración de servidor Teltonika FMM880
  - Configuración FMM880 Plaspy
  - Configuración de rastreador Plaspy
  - Configuración de rastreador GPS FMM880
  - Rastreo de vehículos FMM880
  - Configuración GPS Teltonika
  - Configuración de software de seguimiento FMM880
  - Rastreo de flotas FMM880
---

# Teltonika - FMM880 Configuración

Esta página describe el contexto público de configuración para usar el Teltonika FMM880 con Plaspy. Resume los ajustes de servidor prácticos y comandos de ejemplo que se usan comúnmente para apuntar un FMM880 a Plaspy, y explica qué verificar antes de integrar el dispositivo en su cuenta y flotas en Plaspy.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el equipo del fabricante pueden variar según la revisión de firmware, la variante de hardware, el tipo de instalación y las herramientas del proveedor, por lo que debe usar esta guía junto con la documentación oficial de Teltonika y sus herramientas de instalación.

## Resumen de la configuración

El objetivo de esta configuración es preparar el FMM880 para que se comunique de forma fiable con Plaspy y aparezca como un dispositivo activo en la plataforma. El proceso típicamente asegura que el equipo tenga conectividad celular activa, el endpoint y puerto de servidor correctos y los datos APN necesarios para que la telemetría y las posiciones GNSS fluyan hacia Plaspy.

- Apuntar el servidor de reporte del dispositivo a Plaspy para que el rastreador envíe actualizaciones de GNSS y telemetría a la plataforma.
- Configurar el transporte y el puerto del dispositivo para que los paquetes se enruten a Plaspy en el endpoint esperado.
- Verificar APN y credenciales celulares para que el FMM880 establezca una conexión de datos móviles.
- Guardar y aplicar los ajustes y, si es necesario, reiniciar el dispositivo para comenzar el reporte.
- Validar que el dispositivo aparezca en Plaspy y revisar telemetría, ubicación e informes de estado.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de comenzar

- Una unidad FMM880 cargada y accesible, lista para configuración y despliegue.
- Servicio celular activo y una tarjeta SIM funcional que soporte las bandas celulares del dispositivo y un plan de datos.
- Acceso a métodos de configuración Teltonika como comandos SMS, herramientas de configuración del fabricante o una interfaz de instalador aprobada.
- APN correcto, nombre de usuario APN y contraseña APN del operador de la SIM, preservados como marcadores cuando sea necesario.
- Una cuenta en Plaspy y conocimiento de cómo su organización asigna dispositivos a cuentas o flotas para su visibilidad en la plataforma.
- Tiempo y precaución para revisar la versión de firmware y aplicar las actualizaciones recomendadas por el proveedor antes de despliegues masivos.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el FMM880 envía posiciones GNSS y telemetría a Plaspy usando el endpoint y puerto compartidos de Plaspy. Plaspy recibe esos paquetes, detecta automáticamente el protocolo del dispositivo y muestra la ubicación y el estado del equipo en la plataforma para supervisión e informes.

- El rastreador se configura para reportar al endpoint y puerto compartidos de Plaspy.
- El dispositivo envía actualizaciones periódicas de ubicación e informes de eventos a Plaspy para su visualización en el panel.
- La telemetría y las lecturas de sensores se reenvían a Plaspy junto con las posiciones GNSS para un seguimiento completo.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no se requiere seleccionar el protocolo por dispositivo en la plataforma.
- Usar el APN y los ajustes de transporte correctos garantiza que el dispositivo mantenga una conexión ascendente confiable hacia Plaspy.

## Flujo de trabajo común de configuración

1. Acceda al método u herramienta oficial de Teltonika para configurar el FMM880, como la configuración por SMS, las herramientas configuradoras de Teltonika o la interfaz web del dispositivo cuando esté disponible.
2. Introduzca d.plaspy.com o, si su herramienta lo requiere, la IP del servidor 54.85.159.138 como servidor de reporte del dispositivo.
3. Establezca el puerto del servidor a 8888 en la configuración de servidor o GPRS del dispositivo.
4. Elija el transporte UDP o TCP si la configuración del dispositivo solicita una selección de transporte.
5. Proporcione los valores correctos de APN, nombre de usuario APN y contraseña APN para la SIM en los campos correspondientes o como marcadores.
6. Aplique o guarde la configuración y reinicie el rastreador si el dispositivo o la herramienta requieren un reinicio para activar los nuevos ajustes.
7. Valide que el dispositivo reporte a Plaspy revisando la lista de dispositivos y la telemetría reciente en su cuenta Plaspy.

## Comandos de configuración de ejemplo

Para configurar los parámetros básicos en su dispositivo Teltonika, introduzca la siguiente línea de comando según la guía pública de Teltonika. Esta línea única suele enviarse por SMS o introducirse como comando por lotes en las herramientas de configuración de Teltonika. Preserve los marcadores de posición y reemplácelos por los datos APN de su operador.

- Ejemplo de comando setparam por lotes

```
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

Notas sobre el comando y los marcadores:
- [apn] es el Access Point Name del operador móvil requerido para datos.
- [apnu] es el nombre de usuario APN si su operador requiere autenticación.
- [apnp] es la contraseña APN si su operador requiere autenticación.
- El comando configura el dispositivo para reportar a d.plaspy.com en el puerto 8888 como se muestra arriba.
- Si su interfaz de configuración requiere una dirección IP en lugar de un dominio, puede usar 54.85.159.138 en el campo del servidor.
- Los parámetros numéricos mostrados forman parte del formato setparam de Teltonika. Consulte la documentación de Teltonika para detalles sobre la numeración de parámetros y las banderas de transporte.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los números de parámetro y los canales de configuración disponibles. Revise las notas de la versión del firmware del FMM880 antes de realizar configuraciones masivas.
- El comando de ejemplo es adecuado para SMS o herramientas de configuración por lotes de Teltonika según la guía del proveedor. Use el método que coincida con su proceso de aprovisionamiento de dispositivos.
- Elija TCP o UDP según la preferencia del instalador o las consideraciones de la red local; Plaspy soporta ambos transportes en el puerto 8888.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta el protocolo automáticamente, por lo que la consistencia en servidor y puerto es el requisito principal.
- Cuando la resolución de dominios no esté disponible en el entorno del dispositivo, utilice la IP de servidor proporcionada como dirección alternativa.

## Por qué usar Plaspy con esta configuración

Usar el FMM880 con Plaspy ofrece una vía directa para una visibilidad fiable de activos y flotas. El endpoint compartido de Plaspy y el enfoque de puerto único simplifican los despliegues a gran escala al reducir la variación por dispositivo en la configuración del servidor, mientras que la detección automática de protocolos minimiza el trabajo de configuración en la plataforma.

Para saber más sobre Plaspy y las funciones de la plataforma, visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo más recientes, comportamiento de firmware y referencias de parámetros, consulte la documentación oficial de Teltonika en https://www.teltonika-gps.com/ para confirmar las instrucciones de configuración más actuales.
