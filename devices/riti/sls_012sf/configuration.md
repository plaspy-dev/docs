---
slug: /riti/sls_012sf/configuration
id: sls_012sf-configuration
sidebar_label: Configuration
title: Riti - SLS-012SF Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Riti SLS-012SF tracker integration with Plaspy servers and shared settings
keywords:
  - Riti SLS-012SF configuration
  - Riti SLS-012SF setup
  - Riti GPS tracker configuration
  - Riti SLS-012SF Plaspy
  - SLS-012SF server configuration
  - fleet management tracker setup
  - GPS tracker Plaspy configuration
  - vehicle tracker setup guide
  - Riti tracker integration
  - SLS-012SF telemetry setup
---

# Riti - SLS-012SF Configuration

This page documents the public configuration context for using the Riti SLS-012SF GPS vehicle tracker with the Plaspy backend. It summarizes the shared Plaspy server settings you will use to point this tracker at the platform, explains typical prerequisites, and describes the practical steps used to apply and verify the configuration. The information below is intended to help installers and integrators prepare the device to communicate with Plaspy.

The SLS-012SF includes a high sensitivity GPS module and a mobile communication module supporting GSM SMS and GPRS. Plaspy uses a single, shared server endpoint and port across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and the configuration tools provided by Riti or third party installers, so confirm device-specific details with the manufacturer when needed.

## Configuration Overview

Prepare the SLS-012SF to send its location and sensor data to Plaspy by updating the device server settings and validating connectivity. The focus of this configuration is to establish reliable IP transport to the Plaspy server and confirm that the device is visible in the Plaspy platform.

- Point the tracker to the Plaspy server endpoint and ensure the transport mode matches the device options.
- Configure a working mobile data connection on the device and verify APN settings if required.
- Save and apply the configuration, then restart the tracker when instructed by the manufacturer.
- Validate that the device appears and reports on the Plaspy platform using the shared server and port.
- Use the platform visibility to confirm GPS reception and any external sensor data forwarding.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the SLS-012SF:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

Note that Plaspy uses the same port 8888 for all supported devices and will detect the tracker protocol automatically.

## Typical Requirements Before Setup

- A powered and installed SLS-012SF unit with access to its manufacturer configuration interface.
- A working mobile data connection and an activated SIM if using GSM GPRS for telemetry.
- Access to the official Riti configuration tool, SMS command list, or technician interface supplied with the device.
- The Plaspy server settings ready to enter: d.plaspy.com or 54.85.159.138 and port 8888.
- Administrative access to Plaspy or an integrator account to verify device reporting and visibility.
- Basic knowledge of whether your device firmware requires TCP or UDP selection for server transport.

## How This Tracker Connects to Plaspy

When configured, the SLS-012SF sends real-time positional and sensor data to the Plaspy backend using the shared server endpoint and port. Plaspy receives the device connection and detects the protocol automatically, enabling the platform to decode and display the incoming telemetry.

- The tracker reports location and event data to the Plaspy server endpoint at d.plaspy.com or 54.85.159.138.
- Data is transmitted over port 8888 using UDP or TCP depending on your device settings.
- Plaspy automatically detects the tracker protocol so no platform-side protocol selection is required.
- External sensor readings and auxiliary inputs forwarded by the tracker are delivered to Plaspy for analysis and display.
- Platform visibility allows monitoring of device connectivity, last known position, and event logs.

## Common Configuration Workflow

1. Access the official Riti configuration method or software provided with your SLS-012SF unit. This may be a web interface, SMS command set, or dedicated PC tool depending on the device and firmware.
2. In the server or backend settings, enter the Plaspy server address using either d.plaspy.com or the IP address 54.85.159.138.
3. Set the device server port to 8888.
4. Choose UDP or TCP for transport if the device requires explicit transport selection.
5. Apply or save the configuration changes in the device tool or via the device command interface.
6. Restart the tracker if the manufacturer instructions require a reboot for changes to take effect.
7. Validate that the SLS-012SF reports to Plaspy and appears in the platform by checking connectivity and recent position updates.

## Example Configuration Commands

The exact configuration commands and method vary by Riti firmware and the configuration tool you use. Some installations use SMS commands, while others rely on a PC configuration utility or an on device menu. Because manufacturer implementations differ, refer to the official Riti command list or configuration manual for device-specific command syntax and examples.

When using a configuration tool, enter the following public values where prompted: server d.plaspy.com (or 54.85.159.138), port 8888, and select UDP or TCP if required. After applying the settings, follow the device instructions to save and reboot as needed.

## Configuration Notes

- Firmware and hardware revisions can change required command syntax and menu locations; always check the device firmware version before following a guide.
- TCP and UDP both work with Plaspy on port 8888; choose the transport mode recommended for your network environment or device firmware.
- If the tracker uses GPRS, ensure the APN is configured correctly for your SIM provider and that data service is enabled.
- Some installers prefer using the server IP 54.85.159.138 when DNS is not available on the device network.
- Keep a copy of any manufacturer SMS command list or configuration export for troubleshooting and future upgrades.

## Why Use Plaspy with This Configuration

Configuring the Riti SLS-012SF to report to Plaspy provides a straightforward path to continuous fleet visibility and centralized telemetry management. Plaspy’s shared server endpoint and automatic protocol detection simplify onboarding, reducing the number of device-specific settings an installer needs to manage while enabling near real-time position and event reporting.

To learn more about how Plaspy can support your deployment and to review platform capabilities visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and installation guidance verify details on the manufacturer website https://www.riti.com.tw/ since device behavior and setup methods can change with firmware and product revisions.
