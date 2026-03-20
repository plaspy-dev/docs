---
slug: /teltonika/fmc920/configuration
id: fmc920-configuration
sidebar_label: Configuration
title: Teltonika - FMC920 Configuration
sidebar_class_name: menu_item_tracker
description: Configurar el Teltonika FMC920 para usarlo con Plaspy, con ajustes de servidor y comandos ejemplo
keywords:
  - Configuración Teltonika FMC920
  - Configuración FMC920 Plaspy
  - Configuración del servidor Teltonika FMC920
  - Configuración rastreador GPS FMC920
  - Configuración rastreador Teltonika
  - Seguimiento de vehículo FMC920
  - Integración FMC920 Plaspy
  - Seguimiento de flota Teltonika FMC920
  - Configuración APN Teltonika FMC920
  - Comandos Teltonika FMC920
---

# Teltonika - Configuración FMC920

Esta página documenta el contexto público de configuración para usar el Teltonika FMC920 con Plaspy. Se concentra en los ajustes compartidos del servidor de Plaspy que debe aplicar al rastreador y explica los pasos prácticos y verificaciones necesarias para que el FMC920 reporte en Plaspy y usted obtenga visibilidad en tiempo real de su flota.

Plaspy utiliza los mismos ajustes de servidor compartido para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos del fabricante pueden variar según la versión de firmware, la variante de hardware, el tipo de instalación y las herramientas del proveedor que use para configurar la unidad, por lo que esta página ofrece los ajustes públicos prácticos y comandos de ejemplo, recomendando que confirme detalles específicos del dispositivo con la documentación de Teltonika.

## Resumen de la configuración

El objetivo de esta configuración es preparar el FMC920 para enviar su ubicación y telemetría a Plaspy de forma fiable. Esto incluye apuntar el dispositivo al endpoint y puerto de Plaspy, asegurar que la unidad tenga conectividad celular funcional y credenciales APN correctas, y validar que el rastreador aparezca en Plaspy tras la configuración.

- Apunte el FMC920 al endpoint del servidor de Plaspy para que los datos reportados lleguen a su cuenta.
- Configure el APN y parámetros de conectividad para que el dispositivo use la red celular.
- Seleccione el modo de transporte que requiera el equipo y confirme que comunica en el puerto compartido de Plaspy.
- Guarde y aplique la configuración, luego valide que el dispositivo sea visible en los paneles y mapas de Plaspy.
- Use el comando de ejemplo a continuación como punto de partida práctico para parámetros básicos de servidor y APN.

## Ajustes del servidor Plaspy

- dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- puerto 8888
- soporte de transporte UDP o TCP
- detección automática de protocolo en Plaspy

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta al endpoint compartido.

## Requisitos típicos antes de la configuración

- Acceso físico o remoto al método de configuración del FMC920 provisto por Teltonika.
- SIM activa y plan de datos válido con credenciales APN correctas para que el dispositivo use datos móviles.
- Dispositivo alimentado e instalado con el cableado o antenas requeridos.
- Conocimiento del método de configuración del fabricante que usará, como comandos SMS, herramientas de Teltonika o flujos de aprovisionamiento del proveedor.
- Firmware actualizado y variante de hardware compatible verificada con Teltonika si existen diferencias regionales o dispositivos fuera de servicio.
- Acceso a su cuenta de Plaspy y la capacidad de confirmar el reporte del dispositivo en la plataforma.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el FMC920 envía posición GNSS y telemetría a través de la red celular al endpoint y puerto compartido de Plaspy. Plaspy ingiere los mensajes entrantes y los asigna al dispositivo para monitoreo en tiempo real, procesamiento de eventos e informes.

- El rastreador se configura para reportar a d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.
- El transporte puede configurarse como UDP o TCP según la necesidad del dispositivo y la preferencia del instalador.
- Plaspy detecta automáticamente el protocolo del dispositivo cuando se establece la conexión con el servidor compartido.
- Una vez conectado, el equipo envía actualizaciones de posición y telemetría que Plaspy muestra en paneles y alertas.
- Valide la conectividad en Plaspy para confirmar que el dispositivo está enviando reportes de posición después de la configuración.

## Flujo de trabajo típico de configuración

1. Acceda al método o software oficial de configuración de Teltonika para el FMC920 según recomiende el fabricante.
2. Ingrese el dominio del servidor de Plaspy d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del equipo.
3. Configure el puerto del dispositivo en 8888 como el puerto primario de reporte usado por Plaspy.
4. Seleccione UDP o TCP si el dispositivo requiere elección de transporte durante la configuración.
5. Configure las credenciales APN y cualquier autenticación requerida para la conectividad celular.
6. Aplique o guarde la configuración y reinicie el dispositivo si el método lo requiere.
7. Valide que el rastreador esté reportando a Plaspy y aparezca en su cuenta con actualizaciones de posición recientes.

Si utiliza un comando de ejemplo o un lote SMS, ejecútelo después de confirmar que los marcadores de APN fueron reemplazados correctamente por los valores de su operador móvil.

## Comandos de configuración de ejemplo

Para configurar los parámetros básicos en su dispositivo Teltonika, envíe la siguiente cadena de comando. Este ejemplo público demuestra cómo se pueden establecer el APN y los parámetros del servidor Plaspy en un único comando. Conserve los marcadores y reemplácelos por los valores de su operador donde sea necesario.

- Comando de ejemplo para establecer APN y parámetros del servidor Plaspy

```
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

Explicación de marcadores y campos en el comando
- {{apn}}  Reemplace con el nombre APN de la tarjeta SIM proporcionado por el operador móvil.
- {{apnu}} Reemplace con el usuario APN si su operador lo exige, de lo contrario deje en blanco.
- {{apnp}} Reemplace con la contraseña APN si es requerida por el operador.
- d.plaspy.com Esto configura el dominio del servidor Plaspy como destino de reporte.
- 8888 Esto establece el puerto de reporte usado por Plaspy para todos los dispositivos.
- El parámetro final configura el transporte o el perfil según lo requiera el firmware del equipo. Verifique la interpretación del valor de transporte para su versión de firmware antes de aplicar.

Use el método recomendado por el fabricante para enviar comandos, como la interfaz SMS de Teltonika o las herramientas de configuración, y confirme que los comandos son aceptados por el dispositivo. Si su entorno de aprovisionamiento usa la IP de Plaspy en lugar del dominio, puede suministrar 54.85.159.138 en lugar de d.plaspy.com cuando el dispositivo o la herramienta requiera una IP.

## Notas de configuración

- Las variantes de firmware y hardware pueden cambiar los IDs de parámetros o el mapeo de valores de transporte; siempre consulte la documentación del firmware del equipo para conocer el significado exacto de cada parámetro.
- El ejemplo de comando conserva marcadores APN que deben llenarse con las credenciales del operador; una configuración APN incorrecta impide el uso de datos móviles y el reporte.
- Algunos instaladores prefieren usar el dominio d.plaspy.com para enrutamiento basado en DNS, mientras que otros aprovisionan la IP 54.85.159.138 directamente para un enrutamiento determinista.
- Elija UDP o TCP según su instalación y los requisitos del equipo; Plaspy acepta ambos en el puerto 8888 y detectará automáticamente el protocolo.
- Confirme con Teltonika cualquier diferencia regional o relacionada con EOL al adquirir equipos o planear despliegues masivos.

## Por qué usar Plaspy con esta configuración

Usar el Teltonika FMC920 con Plaspy ofrece una solución de rastreo compacta que puede apuntarse rápidamente al endpoint compartido de Plaspy para que la ubicación y la telemetría sean visibles en una única plataforma de gestión de flotas. Esta configuración soporta flujos de trabajo típicos de flota, incluyendo actualizaciones de posición en tiempo real, alertas y funciones de control remoto cuando estén habilitadas.

Para más información sobre Plaspy e integraciones de dispositivos soportados visite https://www.plaspy.com. Para instrucciones de configuración específicas por dispositivo, notas de firmware y soporte técnico actual confirme los detalles en el sitio oficial de Teltonika https://www.teltonika-gps.com/ ya que las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo.
