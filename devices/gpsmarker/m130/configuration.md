---
slug: /gpsmarker/m130/configuration
id: m130-configuration
sidebar_label: Configuration
title: GPSMarker - M130 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for GPSMarker M130 and Plaspy including server settings and setup workflow
keywords:
  - GPSMarker M130 configuration
  - GPSMarker M130 setup
  - GPS tracker configuration
  - Plaspy configuration
  - vehicle tracking setup
  - M130 server configuration
  - GPSMarker M130 Plaspy
  - tracker setup guide
  - M130 tracking platform
  - GPSMarker configuration
---

# GPSMarker - M130 Configuration

This page covers the public configuration context for using the GPSMarker M130 tracker with Plaspy. It explains the shared server settings Plaspy expects and gives practical setup guidance to prepare the M130 for reporting location and event data to the Plaspy platform. The content focuses on publicly available configuration choices and the recommended workflow for integrating the device with Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. The M130 description notes no subscription fee for the device itself, outgoing SMS and GPRS usage for connectivity, a 99 channel GPS GLONASS receiver, long battery life options, and sensors for movement, crash detection, panic, temperature, and relay control. Use this page as a practical checklist and refer to official manufacturer documentation for model specific commands.

## Configuration Overview

Configuring the M130 for Plaspy prepares the device to send position reports and status messages to Plaspy so assets become visible in the platform. The goal is to ensure reliable GPRS or SMS connectivity, point the device at the Plaspy endpoint, and verify successful reporting so the M130 appears and updates correctly in Plaspy.

- Point the M130 to the Plaspy server endpoint so telemetry is routed to Plaspy.
- Configure the transport mode if the device requires selecting UDP or TCP.
- Verify the device has a working SIM with data or SMS capability and enough balance for outgoing messages.
- Validate that the device reports to Plaspy and shows up in the platform after configuration.
- Test movement or alarm notifications so the tracker and Plaspy event handling are confirmed.

## Plaspy Server Settings

Use the following Plaspy server settings when configuring the M130. Plaspy uses the same port for all supported devices and Plaspy automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all devices

## Typical Requirements Before Setup

- A powered GPSMarker M130 with access to its configuration method or software from the manufacturer
- An active SIM card with data or SMS capability and an appropriate tariff for online monitoring
- Access to the installer interface or SMS command list provided by the manufacturer
- A charged battery or reliable power supply if the device is installed in a vehicle or asset
- Network coverage for GPRS so the tracker can send packets to the Plaspy server
- A method to restart or reboot the device after applying settings if required

## How This Tracker Connects to Plaspy

The M130 is configured to report its location and event messages to Plaspy by directing its outgoing telemetry to the shared Plaspy server endpoint and port. Plaspy receives the device packets on port 8888 and automatically identifies the tracker protocol to decode messages and display the device in the platform.

- The tracker sends periodic location updates to d.plaspy.com or 54.85.159.138 on port 8888
- Transport can be selected as UDP or TCP depending on the device configuration option
- Event messages such as movement, crash, panic, or low battery are transmitted to Plaspy for processing
- Plaspy auto detects the tracker protocol so you do not need to manually tell Plaspy which protocol the M130 uses
- After successful transmission the device becomes visible in Plaspy and reports status and position data

## Common Configuration Workflow

1. Access the official GPSMarker configuration method or software provided by the manufacturer for the M130.
2. Locate the server or host settings and enter d.plaspy.com or 54.85.159.138 as the target server.
3. Set the server port to 8888 as required by Plaspy.
4. Choose UDP or TCP if the M130 requires a transport selection in its configuration.
5. Apply or save the configuration changes in the device interface or via the manufacturer provided commands.
6. Restart or power cycle the unit if the device requires a reboot to activate new network settings.
7. Validate that the device reports to Plaspy and appears in the platform with expected position and event updates.

## Example Configuration Commands

The exact configuration commands and the method to send them depend on the manufacturer tool, firmware version, and regional firmware builds for the M130. GPSMarker devices commonly provide configuration via a software utility or SMS command strings; because commands vary, consult the official GPSMarker documentation or the device manual for precise command syntax.

Plaspy uses the same port for all supported devices and Plaspy automatically detects the tracker protocol, so the primary public configuration actions are entering d.plaspy.com or 54.85.159.138 and setting port 8888 with the desired transport UDP or TCP. Verify the specific command set with GPSMarker support or the device manual before applying commands.

## Configuration Notes

- Firmware versions and regional model variants can change command syntax and available options; always check the M130 manual for your device firmware.
- If the M130 supports both SMS and GPRS configuration, use the manufacturer recommended tool for bulk configuration and reserve SMS for field changes or recovery.
- Choosing UDP versus TCP may affect delivery behavior under different network conditions; test both if the device and network allow.
- Plaspy automatically detects the tracker protocol so you only need to ensure server, IP, port, and transport are set on the device side.
- Installer practices such as performing a reboot after configuration and verifying connectivity with a test report improve reliability.

## Why Use Plaspy with This Configuration

Using the GPSMarker M130 with Plaspy provides a straightforward path to platform visibility and operational oversight. By configuring the device to send data to the shared Plaspy endpoint and port, organizations gain timely position updates, event reporting, and sensor alerts through the Plaspy platform while keeping device side setup simple.

To learn more about Plaspy visit https://www.plaspy.com and verify the latest device specific configuration methods and firmware behavior on the manufacturer site https://gpsmarker.ru/. Manufacturer specifications, setup tools, and device behavior can change over time so confirm current instructions with GPSMarker documentation.
