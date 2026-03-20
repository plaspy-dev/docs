---
slug: /eelink/tk121s/configuration
id: tk121s-configuration
sidebar_label: Configuration
title: EElink - TK121‑S Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar EElink TK121 S y conectarlo a Plaspy usando servidor compartido y comandos SMS
keywords:
  - configuración EElink TK121 S
  - configuración servidor TK121 S
  - configuración TK121 S para Plaspy
  - configuración rastreador EElink para Plaspy
  - configuración GPS TK121 S
  - configuración protocolo MoveLink
  - configuración SMS rastreador GPS
  - configuración seguimiento vehicular
  - integración Plaspy seguimiento de flotas
  - configuración GPRS TK121 S
---

# EElink - Configuración del TK121‑S

En esta página encontrará la información pública para configurar el rastreador EElink TK121‑S con Plaspy. El contenido se centra en los ajustes de servidor prácticos, los comandos SMS documentados por el fabricante y los pasos más comunes para preparar el dispositivo y que reporte a Plaspy para seguimiento en tiempo real y envío de eventos.

Plaspy emplea ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que solo es necesario apuntar el TK121‑S al endpoint de Plaspy y la plataforma se encargará de la detección. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; use los comandos de esta página como guía pública y verifique siempre contra la documentación oficial y la versión de firmware del equipo.

## Resumen de configuración

El objetivo de esta configuración es preparar el TK121‑S para que envíe periódicamente posiciones y eventos a Plaspy, de modo que el dispositivo sea visible y gestionable desde la plataforma. El TK121‑S permite la configuración remota vía SMS como método documentado públicamente; los comandos que se muestran abajo son los pasos habituales para ajustar zona horaria, APN, servidor GPRS, intervalo de reporte y comprobaciones de parámetros.

- Apuntar el dispositivo al endpoint del servidor Plaspy para que los datos lleguen a la plataforma
- Configurar APN y credenciales de red para establecer conectividad GPRS
- Definir intervalos de reporte y temporizadores para controlar la frecuencia de envíos de posición
- Verificar parámetros y conectividad con un comando de estado del dispositivo
- Opcionalmente restaurar configuración de fábrica antes de despliegues masivos si fuera necesario

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com para configuraciones basadas en nombre de host
- IP del servidor: 54.85.159.138 para configuraciones directas por IP
- Puerto: 8888 utilizado por Plaspy para las conexiones de rastreadores
- Transporte: soporte UDP o TCP en el puerto 8888 según preferencia del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador cuando los dispositivos se conectan
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que debe usar el puerto 8888 para cualquier rastreador soportado

## Requisitos típicos antes de la configuración

- Un TK121‑S con alimentación, accesible y con la SIM instalada y servicio de red activo
- Datos móviles o capacidad de SMS válidos por parte del operador y credenciales APN correctas
- Acceso al dispositivo mediante el método de configuración del fabricante, como comandos SMS o software del proveedor
- Conocimiento del IMEI del dispositivo y credenciales de instalador cuando sean requeridas para mapear el dispositivo en la plataforma
- Un plan para validar cómo y dónde comprobar que el dispositivo reporta correctamente en Plaspy tras aplicar los ajustes del servidor

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el TK121‑S envía informes de ubicación y eventos al endpoint y puerto compartidos de Plaspy. Plaspy procesa esos paquetes y reconoce automáticamente el protocolo del rastreador, de modo que el dispositivo aparece en la plataforma sin necesidad de seleccionar manualmente el protocolo en el servidor.

- El rastreador envía reportes periódicos a d.plaspy.com o directamente a 54.85.159.138
- Los reportes se envían al puerto 8888, que es el puerto estándar que usa Plaspy para todos los dispositivos
- El dispositivo puede usar transporte UDP o TCP para alcanzar el endpoint de Plaspy
- Plaspy detecta automáticamente los detalles del protocolo, por lo que la configuración del servidor es la misma entre dispositivos
- Los paneles de la plataforma muestran ubicación, estado de ACC y eventos de alarma recibidos desde el rastreador

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de EElink para su TK121‑S, ya sea por comandos SMS o por el software de configuración del fabricante
2. Ingrese el servidor de Plaspy usando d.plaspy.com o 54.85.159.138 como dirección de servidor
3. Establezca el puerto del servidor en 8888, que Plaspy utiliza para todos los dispositivos compatibles
4. Seleccione UDP o TCP si el dispositivo requiere elegir el transporte
5. Aplique o guarde la configuración en el dispositivo y envíe los comandos si está usando SMS
6. Reinicie el rastreador si el firmware lo requiere o si lo recomienda la práctica de instalación
7. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma con actualizaciones de posición en vivo

## Ejemplos de comandos de configuración

El TK121‑S soporta configuración vía SMS. A continuación se muestran los comandos SMS públicos para la configuración básica. Mantenga los marcadores de posición tal como aparecen al aplicar los comandos.

1. Reinicio opcional a valores de fábrica al inicio de la configuración
```
FACTORY#
```
2. Establecer zona horaria a UTC 0
```
GMT,E,0#
```
3. Establecer el APN del operador
```
APN,[apn]{{,[apnu],[apnp]}}#
```
- Explicación: reemplace [apn] por el APN del operador. Si el APN requiere usuario o contraseña incluya [apnu] y [apnp] respectivamente. El comando puede omitir usuario y contraseña si no son necesarios.

4. Establecer el servidor GPRS por dominio para Plaspy
```
SERVER,1,d.plaspy.com,8888#
```
O establecer el servidor GPRS por IP para Plaspy
```
SERVER,0,54.85.159.138,8888#
```
5. Establecer el intervalo de actualización a 60 segundos
```
TIMER,60#
```
6. Comprobar los parámetros actuales
```
PARAM#
```
- Use PARAM# para solicitar al dispositivo que responda con los valores de configuración actuales para su verificación.

## Notas de configuración

- La configuración por SMS está documentada públicamente para el TK121‑S y es adecuada para configuración remota o en campo cuando no están disponibles herramientas alternativas
- Las diferencias de firmware y las versiones de software de los proveedores pueden cambiar la sintaxis de comandos o los parámetros disponibles, por lo que confirme la sintaxis con las notas del release del firmware del dispositivo
- Elija UDP o TCP según los requisitos de la instalación; ambos son compatibles con Plaspy en el puerto 8888
- Use el comando PARAM# después de la configuración para confirmar que la dirección del servidor y los temporizadores se aplicaron correctamente
- Si va a desplegar a gran escala, considere herramientas o scripts del proveedor que permitan enviar lotes SMS idénticos a múltiples dispositivos y registrar las respuestas

## Por qué usar Plaspy con esta configuración

Usar el TK121‑S con Plaspy ofrece a los equipos de flotas una forma sencilla de recibir ubicación, estado de ACC y eventos de alarma en una única plataforma. Los ajustes de servidor compartidos y la detección automática de protocolo de Plaspy reducen la complejidad del lado servidor, permitiendo que los instaladores se concentren en la configuración a nivel de dispositivo, como APN e intervalos de reporte.

Para conocer más sobre Plaspy visite https://www.plaspy.com. Para la sintaxis más reciente específica del dispositivo, notas de firmware y recursos técnicos adicionales, verifique la documentación oficial de EElink en https://www.eelink.com.cn/ ya que los métodos de configuración del fabricante y el comportamiento del firmware pueden cambiar con el tiempo.
