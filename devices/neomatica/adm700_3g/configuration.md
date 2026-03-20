---
slug: /neomatica/adm700_3g/configuration
id: adm700_3g-configuration
sidebar_label: Configuration
title: Neomatica - ADM700 3G Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Neomatica ADM700 3G and Plaspy with shared server settings and practical setup workflow
keywords:
  - Neomatica ADM700 3G configuration
  - ADM700 3G setup Plaspy
  - Neomatica tracker configuration
  - ADM700 3G server configuration
  - ADM700 3G GPS platform setup
  - Neomatica fleet tracking configuration
  - ADM700 3G EGTS configuration
  - ADM700 3G telemetry setup
  - Plaspy device configuration
  - vehicle tracker Neomatica ADM700 3G
---

# Neomatica - ADM700 3G Configuration

This page covers the public configuration context for using the Neomatica ADM700 3G tracker with Plaspy. It summarizes the shared Plaspy server settings, explains how this model typically connects to the Plaspy platform, and provides a practical workflow to prepare the device for reporting location and telemetry into Plaspy. Use this guide as a complement to Neomatica manufacturer documentation and your installer procedures.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The ADM700 3G is described here as a robust 3G telematics device with EGTS and open protocol support, dual SIM capability, and remote firmware update options that simplify integration into Plaspy when the server settings below are applied.

## Configuration Overview

The objective of configuration is to point the ADM700 3G at the Plaspy ingestion endpoint and verify that the device successfully sends GNSS and telemetry data. Configuration typically involves using the manufacturer’s software or SMS/command interface to set the server destination, transport, and port, then validating connectivity in Plaspy.

- Configure the device to report to the Plaspy server endpoint so GNSS fixes and telemetry are delivered.
- Select the transport (UDP or TCP) and set the common Plaspy port to ensure proper routing.
- Validate cellular connectivity, SIM readiness, and that the device is using the correct APN if required by your network.
- Save and apply settings, then confirm the unit appears and reports in Plaspy.
- Use manufacturer tools for firmware management and any required protocol selection (EGTS or open protocol) as appropriate.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so devices using EGTS or the device open protocol are accepted on the same port

## Typical Requirements Before Setup

- A powered ADM700 3G unit with accessible configuration interface (manufacturer software, SMS commands, or configuration tool).
- Active cellular service with one or more SIM cards installed and registered on a compatible 3G/UMTS network.
- Knowledge of the operator APN settings if required by your SIM; keep APN credentials ready.
- Access to the official Neomatica configuration method or support documentation for the ADM700 3G.
- A Plaspy account or administrator access to validate that the device is visible and reporting after configuration.
- A plan for firmware management if remote updates are required across a fleet.

## How This Tracker Connects to Plaspy

When configured, the ADM700 3G sends GNSS fixes and telemetry to Plaspy over cellular data networks using domain name addressing or a direct IP. The tracker can use EGTS or its open protocol to format messages; Plaspy’s platform will detect the protocol automatically when data arrives at the shared server endpoint and port.

- The device reports location and telemetry to d.plaspy.com (or 54.85.159.138) on port 8888.
- Transport may be UDP or TCP; select the transport supported by your firmware or deployment and set the same port 8888.
- Plaspy ingests GNSS fixes, I/O events, and telemetry and maps records to the associated account/device.
- If connectivity is intermittent, the ADM700 3G can buffer records locally and upload them when the cellular link is restored.
- The shared port and protocol detection in Plaspy simplify adding multiple devices without per-device server variation.

## Common Configuration Workflow

1. Access the official Neomatica configuration method or software for the ADM700 3G (manufacturer tool, web GUI, or SMS/command interface).
2. In the device server or TCP/UDP destination settings, enter the Plaspy server address using either d.plaspy.com or 54.85.159.138.
3. Set the server port to 8888.
4. Choose UDP or TCP if the device requires a transport selection; both are supported by Plaspy on port 8888.
5. Provide APN details for the active SIM if the device requires them and verify dual SIM settings if using network redundancy.
6. Apply or save the configuration to the device and follow any manufacturer prompts to commit changes.
7. Restart or power-cycle the device if the manufacturer guidance or firmware requires a reboot to activate new settings.
8. Validate that the ADM700 3G is reporting to Plaspy by confirming device visibility and incoming telemetry in your Plaspy account.

## Example Configuration Commands

The ADM700 3G can be configured using manufacturer tools, web interfaces, or command/SMS formats depending on firmware and installer preference. Exact commands or menu fields vary across Neomatica firmware releases and vendor tools. When using any command-based method, ensure you set the Plaspy server domain or IP and port exactly as shown:

- Point server to d.plaspy.com or 54.85.159.138
- Set port to 8888
- Select transport UDP or TCP as required

Because manufacturer command formats vary, consult the Neomatica ADM700 3G documentation for the precise syntax if you plan to use SMS or command-line configuration. Plaspy will accept connections to d.plaspy.com or 54.85.159.138 on port 8888 and will auto-detect the device protocol.

## Configuration Notes

- Firmware differences can change configuration menus and command syntax; always check the device firmware version before applying settings.
- TCP and UDP both work with Plaspy on the shared port 8888; choose the transport that best fits your network and reliability needs.
- Dual SIM operation on the ADM700 3G improves connectivity resilience; ensure APN settings are configured for each SIM slot if required.
- Because Plaspy automatically detects the tracker protocol, you generally only need to point the device to the Plaspy endpoint and port rather than selecting a Plaspy-specific protocol.
- Keep manufacturer documentation handy for any device-specific options such as EGTS enablement, protocol selection, or firmware update procedures.

## Why Use Plaspy with This Configuration

Using the Neomatica ADM700 3G with Plaspy provides a reliable path to capture real-time location, telemetry, and event-driven alerts from rugged vehicle and equipment deployments. The ADM700 3G’s support for EGTS and open protocol, combined with dual SIM and robust GNSS performance, makes it well suited to fleet, logistics, and heavy equipment scenarios where continuous visibility and historical playback are important.

To learn more about Plaspy and how the platform can accept ADM700 3G devices, visit https://www.plaspy.com. Please verify the latest device-specific configuration steps, firmware behavior, and manufacturer details with Neomatica at https://neomatica.com/ since hardware revisions and firmware updates can change configuration methods over time.
