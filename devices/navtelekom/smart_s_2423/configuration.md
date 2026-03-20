---
slug: /navtelekom/smart_s_2423/configuration
id: smart_s_2423-configuration
sidebar_label: Configuration
title: Navtelekom - SMART S-2423 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Navtelekom SMART S 2423 tracker setup and Plaspy compatibility using shared Plaspy server settings
keywords:
  - Navtelekom SMART S-2423 configuration
  - SMART S-2423 setup
  - Navtelekom tracker Plaspy
  - SMART S-2423 server configuration
  - Navtelekom GPS tracker setup
  - SMART S-2423 Plaspy integration
  - vehicle tracker configuration
  - fleet management tracker setup
  - NTC Configurator SMART S-2423
  - Navtelekom tracking configuration
---

# Navtelekom - SMART S-2423 Configuration

This page covers the public configuration context for using the Navtelekom SMART S-2423 tracker with Plaspy. It explains the shared server settings Plaspy requires and summarizes practical, manufacturer‑level configuration options. Use this guide to prepare the device and understand how it will report location and telemetry to Plaspy for live monitoring and historical reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side steps can vary by firmware, hardware revision, installation type, and the vendor tools you use. The SMART S‑2423 supports NTC Configurator and DRC remote management, which are commonly used to apply the necessary server and transport settings before validation on Plaspy.

## Configuration Overview

The goal of configuration is to point the SMART S‑2423 at the Plaspy server endpoint, select the correct transport, and verify that the tracker is reporting GPS and telemetry data to the platform. The process typically combines the manufacturer configuration tool and a validation step in Plaspy to confirm visibility and event reporting.

- Set the tracker to report to the Plaspy endpoint so position and telemetry reach the platform
- Choose UDP or TCP transport according to installer preference or firmware options
- Apply and save settings using NTC Configurator or the device management system
- Restart or cycle power on the device if required to activate new server settings
- Validate successful transmissions in Plaspy by confirming the device is visible and sending updates

## Plaspy Server Settings

- server domain d.plaspy.com  
- server IP 54.85.159.138  
- port 8888  
- transport support for UDP or TCP  
- automatic protocol detection in Plaspy

All devices in Plaspy use the same port and the platform automatically detects the tracker protocol so you only need to configure the tracker to use the shared endpoint and port.

## Typical Requirements Before Setup

- Access to the SMART S‑2423 and permission to configure it using the official manufacturer method such as NTC Configurator or DRC
- A charged device with power applied and a functional 2G single SIM inserted and registered on a carrier that supports 2G
- Knowledge of the device IMEI or unique tracking identifier for mapping the device in Plaspy
- Documentation or release notes for the installed firmware to confirm supported configuration parameters
- A way to restart or power cycle the tracker after applying new settings to ensure they take effect

## How This Tracker Connects to Plaspy

The SMART S‑2423 is configured to send its GLONASS/GPS position fixes and telemetry to the shared Plaspy server endpoint and port. Plaspy ingests those messages and automatically determines the device protocol so the tracker appears in the platform without per device protocol selection.

- The device sends position and telemetry messages to d.plaspy.com or 54.85.159.138 at port 8888  
- You can select UDP or TCP on the device if the firmware requires a transport choice before sending data to Plaspy  
- Plaspy automatically detects the tracker protocol and decodes incoming messages for maps, alerts, and history  
- Device inputs and outputs, and peripheral telemetry available via RS‑485, 1‑Wire, or Bluetooth are forwarded to Plaspy as configured

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software such as NTC Configurator or DRC remote management.  
2. In the server settings enter d.plaspy.com or the server IP 54.85.159.138 as the destination host.  
3. Set the device port to 8888 which is the shared Plaspy port for all devices.  
4. Choose UDP or TCP if the device requires a transport selection in its settings.  
5. Apply or save the configuration in the manufacturer tool and confirm the changes were accepted.  
6. Restart the SMART S‑2423 if the tool or firmware requires a reboot for network settings to take effect.  
7. Validate that the device reports to Plaspy by checking device visibility and recent position updates in the platform.

## Example Configuration Commands

Exact command syntax and configuration steps can vary by manufacturer tool, firmware version, and whether you use a GUI configurator or remote commands. For the SMART S‑2423 the key values you will enter are the Plaspy server endpoint and the port. Typical entries you will provide to the device configuration are the domain d.plaspy.com or the IP address 54.85.159.138 and the port 8888, and a transport selection of UDP or TCP if required by the firmware. Apply and save those settings within NTC Configurator or the device management interface and then validate device reporting in Plaspy.

## Configuration Notes

- Firmware behavior and available settings can differ between revisions so always check the device firmware version before making changes.  
- Use TCP when you require connection oriented delivery and UDP when lower latency with less overhead is preferred, if your installation must choose a transport. Plaspy supports both and will detect the protocol automatically.  
- NTC Configurator and DRC are the recommended manufacturer tools for applying persistent settings and managing firmware life cycle for the SMART S‑2423.  
- Confirm 2G network availability with your mobile operator in the device deployment region since the tracker uses a single SIM 2G modem.  
- After applying settings, allow time for the device to register on the network and for Plaspy to process the first messages before troubleshooting.

## Why Use Plaspy with This Configuration

Using the SMART S‑2423 with Plaspy gives fleet and asset managers consolidated visibility of position and telemetry on a single platform. The device provides GNSS positioning and multiple telemetry interfaces while Plaspy receives location and event data through the shared server endpoint and automatically interprets the device protocol for mapping, alerting, and historical reporting.

To learn more about Plaspy visit https://www.plaspy.com and review current device documentation and support from the manufacturer at https://www.navtelecom.ru/ to verify the latest setup steps, firmware behavior, and any platform specific recommendations. Device specific methods and firmware can change over time so always confirm configuration details with the manufacturer documentation.
