---
slug: /careu/u1/configuration
id: u1-configuration
sidebar_label: Configuration
title: CAREU - U1 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for CAREU U1 GPS tracker and Plaspy compatibility including server address transport choices and setup workflow
keywords:
  - CAREU U1 configuration
  - CAREU U1 setup
  - CAREU U1 Plaspy configuration
  - CAREU U1 GPS tracker setup
  - CAREU U1 server configuration
  - CAREU U1 platform setup
  - CAREU U1 tracking software configuration
  - CAREU U1 fleet tracking
  - CAREU U1 LTE tracker setup
  - CAREU U1 device configuration
---

# CAREU - U1 Configuration

This page provides the public configuration context for using the CAREU U1 tracker with the Plaspy platform. It summarizes the server settings and the practical steps most installers use to point a U1 device to Plaspy so the device can report position and status. It is intended as a concise technical reference for integrators, fleet managers, and installers.

The CAREU U1 PLUS LTE is a feature rich tracker with GNSS and LTE modules, options for Bluetooth configuration, and multiple I O interfaces for accessories and vehicle data. Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation method, and the vendor configuration tools you use.

## Configuration Overview

This configuration process prepares a CAREU U1 to communicate with Plaspy so location, status, and event data appear in the platform. The goal is to set the device to report to the Plaspy server endpoint and verify reliable uplink so the tracker becomes visible and manageable in the platform.

- Point the device to the Plaspy server endpoint and the shared port used by all Plaspy devices.
- Choose the transport mode supported by the device (UDP or TCP) if required.
- Save and apply the settings through the manufacturer configuration tool or Bluetooth interface.
- Validate connectivity and that the device appears in Plaspy and sends periodic reports.
- Document the device identity used by Plaspy for troubleshooting and future maintenance.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A powered and functioning CAREU U1 device with the required antennas connected as per installation guide.
- An active SIM card with cellular data enabled if you plan to use the device over LTE 3G or 2G networks.
- Access to the official CAREU configuration method such as the vendor software, Bluetooth setup app, or configuration interface supplied by the manufacturer.
- Knowledge of the device IMEI or unique identifier to confirm which unit you are configuring in Plaspy.
- A basic understanding of whether you will use UDP or TCP transport on the device if the device requires an explicit choice.
- Access to the manufacturer documentation for any firmware specific commands or SMS configuration strings.

## How This Tracker Connects to Plaspy

When configured for Plaspy the U1 reports its position and events to the shared Plaspy server endpoint on the same port used by all supported devices. Plaspy accepts the incoming connection on that endpoint and automatically determines the correct protocol the tracker is using.

- The tracker is configured to send GPS and device data to the Plaspy server endpoint and port.
- Data can be transmitted over cellular networks using the device LTE 3G or 2G radios as provided by the installer.
- The tracker transmits periodic position reports and event notifications so the device becomes visible in Plaspy.
- Plaspy detects the device protocol automatically so no separate protocol selection is required in the platform.
- Using the same port for all devices simplifies firewall and network configuration for fleet deployments.

## Common Configuration Workflow

1. Access the official CAREU configuration method or software provided by the manufacturer, or use the device Bluetooth configuration option if available.
2. Enter the Plaspy server as d.plaspy.com or use the server IP 54.85.159.138 in the server address field.
3. Set the device port to 8888 as required by the shared Plaspy service.
4. Choose UDP or TCP transport on the device if the device firmware requires a transport selection.
5. Apply or save the configuration in the device tool and confirm the changes were accepted.
6. Restart the device if the manufacturer recommends a reboot or if required for settings to take effect.
7. Validate that the device reports to Plaspy by confirming the unit appears in the Plaspy platform and is sending periodic updates.

## Example Configuration Commands

The CAREU U1 may be configured with vendor tools, Bluetooth provisioning, or SMS commands depending on firmware and the accessory set installed. Exact command formats and SMS strings vary by manufacturer release and firmware, so there are no universal commands included here.

Refer to the CAREU documentation for any SMS or serial command syntax if you plan to configure the device via text commands or an RS232 interface. If your installation method uses manufacturer software, follow the in app or manual steps to enter the Plaspy server domain or IP and the port 8888, then choose UDP or TCP as needed.

## Configuration Notes

- Firmware differences can change where settings are located or how they are applied; always confirm the firmware revision before following a step by step guide.
- If both UDP and TCP are available, choose the transport that best matches your network and firewall policies; Plaspy supports both and will detect the protocol.
- Bluetooth configuration may be available for easier local setup, but SMS or serial configuration is common for remote installations depending on the device firmware.
- Because Plaspy uses the same port for all devices and performs automatic protocol detection, your primary attention should be correct server address and transport selection on the device.
- Keep a record of any manufacturer specific settings you change so you can revert or replicate the configuration across a fleet.

## Why Use Plaspy with This Configuration

Using the CAREU U1 with Plaspy gives organizations a straightforward way to centralize position, event, and device status data in a single platform. The U1’s LTE and accessory capabilities make it suitable for fleet, refrigerated transport, and integrated vehicle data scenarios, and configuring it to report to Plaspy provides operational visibility and consistent reporting.

Learn more about Plaspy on the main website https://www.plaspy.com. For the most current device specific configuration steps, firmware notes, and manufacturer guidance verify details on the CAREU manufacturer site https://www.systech-iot.com/.
