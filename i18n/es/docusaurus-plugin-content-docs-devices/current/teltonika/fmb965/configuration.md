---
slug: /teltonika/fmb965/configuration
id: fmb965-configuration
sidebar_label: Configuration
title: Teltonika - FMB965 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Teltonika FMB965 con los ajustes del servidor Plaspy y comandos de ejemplo
keywords:
  - Configuración Teltonika FMB965
  - Guía instalación FMB965
  - Teltonika FMB965 Plaspy
  - Configuración servidor FMB965
  - Configuración rastreador Teltonika
  - Configuración GPS FMB965
  - Integración rastreador Plaspy
  - Seguimiento flotas FMB965
  - Configuración sensores BLE FMB965
  - Configuración dispositivo Teltonika
---

# Teltonika - Configuración del FMB965

Esta página describe el contexto público de configuración para usar el rastreador Teltonika FMB965 con Plaspy. Se enfoca en los ajustes compartidos de servidor que Plaspy requiere, pasos prácticos para apuntar un FMB965 al endpoint de Plaspy y la sintaxis de comandos de ejemplo que el fabricante publica para la configuración básica de parámetros.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas de configuración utilizadas por el instalador. Utilice las indicaciones aquí junto con la documentación y herramientas de Teltonika al preparar dispositivos para la integración con Plaspy.

## Visión general de la configuración

El objetivo del proceso de configuración es dejar al FMB965 listo para comunicar de forma fiable la ubicación y la telemetría a Plaspy, ser visible en la plataforma y reportar eventos para monitoreo y alertas.

- Configure los parámetros de red y servidor del dispositivo para apuntar a Plaspy
- Asegúrese de que el dispositivo tenga conectividad móvil y los ajustes APN correctos cuando sea necesario
- Valide el transporte (UDP o TCP) y que el dispositivo use el puerto compartido de Plaspy
- Aplique y guarde los ajustes, luego verifique que el rastreador aparezca en Plaspy
- Use las herramientas del fabricante o comandos SMS donde estén soportados para realizar configuraciones masivas o remotas

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detectará el protocolo correcto para los rastreadores conectados.

## Requisitos habituales antes de la configuración

- Un FMB965 con energía suficiente o conectado a la corriente para realizar la configuración
- Conectividad móvil activada y una SIM con datos si usa redes celulares
- Acceso a las herramientas de configuración de Teltonika o a la interfaz de comandos SMS del dispositivo según lo proporcione el fabricante
- Conocimiento del APN, usuario APN y contraseña APN de la red del operador si se requieren
- Un equipo o dispositivo para enviar comandos de configuración o usar el software de Teltonika para aprovisionamiento masivo
- Confirmación de la versión de firmware del dispositivo y la documentación sobre diferencias en la sintaxis de comandos

## Cómo se conecta este rastreador a Plaspy

El FMB965 se configura para enviar posiciones y eventos al endpoint y puerto compartido de Plaspy. Una vez configurado, el rastreador envía actualizaciones periódicas de posición y notificaciones de eventos a Plaspy, donde quedan disponibles para mapeo en vivo, historial y alertas.

- El dispositivo apunta al servidor Plaspy en d.plaspy.com (o a la IP proporcionada)
- Las comunicaciones usan el puerto 8888 para todos los dispositivos conectados a Plaspy
- El transporte puede configurarse en UDP o TCP según la opción del dispositivo; Plaspy acepta ambos
- Plaspy detecta automáticamente el protocolo del rastreador al conectarse e ingiere los reportes de ubicación y eventos
- Tras la configuración exitosa, el dispositivo aparecerá en los paneles de Plaspy para monitoreo y reproducción histórica

## Flujo de trabajo de configuración común

1. Acceda al método oficial de configuración de Teltonika o al software correspondiente (herramientas de Teltonika, FOTA WEB o SMS cuando estén soportados).
2. Introduzca el endpoint de Plaspy como dominio d.plaspy.com o la IP 54.85.159.138 en el campo de servidor.
3. Establezca el puerto del servidor en 8888 (Plaspy utiliza el mismo puerto para todos los dispositivos compatibles).
4. Seleccione UDP o TCP como transporte si el dispositivo requiere una selección explícita.
5. Configure el APN y valores de autenticación si la SIM los requiere e incluya cualquier otro parámetro necesario del dispositivo.
6. Aplique o guarde la configuración y, si es necesario, reinicie el dispositivo para que los cambios surtan efecto.
7. Valide que el dispositivo reporta a Plaspy observando que el rastreador aparece y envía actualizaciones en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El siguiente ejemplo se extrae del contenido público de configuración de Teltonika y muestra un comando compacto para ajustar parámetros básicos, incluidos marcadores de posición de APN y el servidor Plaspy. Conserve los marcadores al adaptar el comando para su despliegue.

- Comando de ejemplo (una sola línea):

```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

Notas sobre los marcadores y su uso:
- {{apn}} es el nombre del APN de la red celular requerido por la SIM
- {{apnu}} es el usuario del APN si la red lo solicita; déjelo vacío si no se usa
- {{apnp}} es la contraseña del APN si lo requiere el operador
- El comando establece el dominio del servidor Plaspy d.plaspy.com y el puerto 8888 tal como se muestra
- Dependiendo de la herramienta Teltonika o de la interfaz SMS que utilice, envíe este comando con el formato recomendado por ese método
- Ajuste el transporte u otros parámetros adicionales según la documentación de Teltonika o su plan de aprovisionamiento

## Notas sobre la configuración

- Las herramientas del fabricante como el software de Teltonika o las interfaces SMS pueden aceptar la misma sintaxis de comando dentro de diferentes envoltorios; siga las instrucciones oficiales de Teltonika para el método que elija.
- Las variaciones de firmware pueden cambiar números de parámetros o la sintaxis requerida; siempre verifique el mapeo de parámetros para su versión de firmware.
- Elija UDP o TCP según las condiciones de la red y la preferencia del instalador; Plaspy acepta ambos y detectará el protocolo automáticamente.
- El comando de ejemplo incluye marcadores de APN; complételos con los valores correctos de su operador móvil antes de aplicar.
- Para despliegues masivos considere las opciones de gestión remota de Teltonika como FOTA WEB junto con los ajustes presentados para un aprovisionamiento escalable.

## Por qué usar Plaspy con esta configuración

Configurar el FMB965 para reportar a Plaspy proporciona a las organizaciones visibilidad consistente sobre la ubicación de activos, sus desplazamientos y los eventos configurados utilizando un endpoint y puerto compartidos y reconocidos. La combinación de un rastreador compacto y de bajo consumo con la detección automática de protocolos de Plaspy y el puerto unificado simplifica la integración y reduce la variación en la configuración por dispositivo.

Para obtener más información sobre Plaspy visite https://www.plaspy.com. Para los métodos de configuración específicos más recientes, detalles de firmware y mapeos de parámetros verifique la documentación del fabricante en https://www.teltonika-gps.com/ ya que el firmware y los procedimientos de configuración pueden cambiar con el tiempo.
