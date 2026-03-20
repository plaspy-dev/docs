---
slug: /hunterpro/cp60_fuel/configuration
id: cp60_fuel-configuration
sidebar_label: Configuration
title: HunterPro - CP60-FUEL Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for HunterPro CP60 FUEL with Plaspy server compatibility and practical setup steps
keywords:
  - HunterPro CP60 FUEL configuration
  - HunterPro fuel tracker setup
  - CP60 FUEL server configuration
  - Plaspy tracker configuration
  - GPS fuel level tracker setup
  - vehicle fuel monitoring configuration
  - fleet fuel tracking configuration
  - CP60 FUEL calibration procedure
  - HunterPro tracker Plaspy guide
  - tracking platform setup
---

# HunterPro - CP60-FUEL Configuration

This page provides public configuration context for using the HunterPro CP60-FUEL tracker with Plaspy. It focuses on the practical server and setup information needed to point the device to Plaspy so the tracker can report fuel level and device data to the platform. The content is written for installers and technical users who need the public steps and values used by Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps can vary depending on firmware version, hardware revision, installation type, and vendor configuration tools. The CP60-FUEL itself is a fuel level tracker that uses a coaxial capacitor probe and requires tank calibration to convert sensor capacity into accurate fuel volume readings; this page centers on the public Plaspy settings and the practical workflow for integration.

## Configuration Overview

The goal of configuration is to prepare the CP60-FUEL to communicate reliably with Plaspy so fuel level and device status are visible in the platform. Configuration focuses on setting the device server target, transport, and basic connectivity validation while ensuring the fuel probe has been calibrated for accurate volume reporting.

- Configure the device to report to the Plaspy server endpoint and port so telemetry and fuel readings are forwarded to the platform.
- Choose the transport mode supported by the tracker and Plaspy, and save the settings on the device.
- Perform tank calibration on the CP60-FUEL so fuel level measurements map correctly to volume values.
- Validate connectivity by checking that the device appears in Plaspy and is sending regular updates.
- Confirm any manufacturer-specific settings using official HunterPro tools or documentation before deployment.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and accepts reports using either transport
- All devices in Plaspy use the same port for device reporting

## Typical Requirements Before Setup

- Device powered and installed with the fuel probe properly mounted and connected
- Tank calibration plan and necessary calibration data available for the CP60-FUEL
- Access to the official HunterPro configuration method or software for applying server settings
- Network connectivity or transport method available according to the device configuration tool
- Administrative access or credential knowledge required by the manufacturer tool to save settings
- A test procedure to verify device reports reach the Plaspy server after configuration

## How This Tracker Connects to Plaspy

The CP60-FUEL is configured to send its telemetry and fuel sensor data to the shared Plaspy server endpoint and port. Plaspy receives the incoming packets, automatically identifies the tracker protocol, and processes fuel level reports together with positional and device health information for visibility in the platform.

- The tracker is pointed to the Plaspy server endpoint d.plaspy.com or the equivalent IP address 54.85.159.138
- Data is sent to port 8888 which Plaspy uses for all supported devices
- Transport can be set to either UDP or TCP depending on device requirements and installer preference
- Plaspy performs automatic protocol detection so explicit protocol selection in the platform is not required
- Once configured and calibrated, fuel level pulses from the CP60-FUEL are converted to volume and forwarded to Plaspy for display and alerts

## Common Configuration Workflow

1. Access the official HunterPro configuration method or software for the CP60-FUEL as provided by the manufacturer or vendor.
2. In the device server settings enter the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138.
3. Set the destination port to 8888 which Plaspy uses for all supported devices.
4. Choose UDP or TCP if the device requires a transport selection and the installation prefers one over the other.
5. Apply or save the configuration using the HunterPro tool so the device stores the new server and transport values.
6. Restart the device if the manufacturer tool or the device firmware requires a reboot to apply network settings.
7. Validate that the CP60-FUEL reports to Plaspy by confirming the device appears in the Plaspy platform and that telemetry and fuel readings are being received.
8. Complete the tank calibration procedure on the device and verify that reported fuel levels match calibrated volumes in Plaspy.

## Example Configuration Commands

The exact command syntax or GUI steps depend on the HunterPro configuration tool and firmware and can vary by hardware revision. Some installations use a desktop utility, web interface, or SMS/serial commands provided by HunterPro. When you use the manufacturer tool, enter the Plaspy endpoint values shown in the Plaspy Server Settings section: d.plaspy.com or 54.85.159.138 and port 8888, and select UDP or TCP if required. Always follow the HunterPro tool prompts to save and apply settings.

## Configuration Notes

- Firmware differences can change where server and port are entered in the configuration tool; check the CP60-FUEL manual for firmware specific instructions.
- Tank calibration is required to translate probe capacitance pulses into accurate fuel volume values; perform calibration after network configuration and before operational use.
- Choose UDP for lower overhead or TCP if a reliable transport is preferred and supported by the device, remembering that Plaspy accepts either.
- Plaspy uses the same port for all supported devices and automatically detects the tracker protocol so the platform side requires no per device protocol configuration.
- Verify any vendor supplied tools, firmware release notes, or installation guides from HunterPro before performing bulk or remote deployments.

## Why Use Plaspy with This Configuration

Using the HunterPro CP60-FUEL with Plaspy gives fleet operators a practical way to collect and visualize fuel level data alongside device status and location. The CP60-FUEL probe technology and calibration procedure provide accurate volume reporting, and pointing the tracker to Plaspy allows centralized monitoring, alerting, and operational oversight across a fleet.

To learn more about Plaspy and supported device integration visit https://www.plaspy.com. For the latest device specific setup instructions, firmware notes, and manufacturer tools please verify details with HunterPro at http://hunterpro.com.tw/ as device behavior and setup steps can change over time.
