---
slug: /gosafe/g3a/configuration
id: g3a-configuration
sidebar_label: Configuration
title: Gosafe - G3A Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the Gosafe G3A tracker for use with Plaspy including server settings and setup workflow
keywords:
  - Gosafe G3A configuration
  - Gosafe G3A setup
  - Gosafe G3A Plaspy
  - Gosafe GPS tracker configuration
  - G3A server configuration
  - G3A tracker setup guide
  - Gosafe tracker Plaspy compatibility
  - Gosafe G3A GPS platform setup
  - Gosafe G3A installation
  - G3A protocol settings
---

# Gosafe - G3A Configuration

This page covers the public configuration context for using the Gosafe G3A tracker with Plaspy. It explains the shared Plaspy server settings you will point the device to, outlines practical setup steps, and highlights the common checks needed to validate the tracker can communicate with the Plaspy platform. Use this guide as a technical reference for common configuration tasks rather than a replacement for the device manual.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The G3A itself is a compact tracker with an internal backup battery, GSM jamming detection, multiple I O options, microphone and analog input support, and a 2D accelerometer. Confirm the latest device specifics with the manufacturer before finalizing your installation.

## Configuration Overview

The goal of configuration is to prepare the G3A so it reliably reports location and events to Plaspy with minimal intervention. In practical terms, configuration makes sure the device has the correct network parameters, transport settings, and any required identifiers so the Plaspy platform can recognize and display the device.

- Point the tracker to the Plaspy server endpoint and verify connectivity
- Set the platform port and choose UDP or TCP if the device requires a transport selection
- Save and apply settings, then restart the tracker if needed to begin reporting
- Validate that location and event messages arrive in Plaspy and that the device is visible in the platform
- Adjust any device event thresholds or I O behavior as required by the installation

## Plaspy Server Settings

Use the following public server settings when configuring the Gosafe G3A to report to Plaspy:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP on port 8888
- automatic protocol detection in Plaspy so the platform determines the device protocol

Note that all devices in Plaspy use the same port and Plaspy will automatically detect the tracker protocol when the device begins sending data.

## Typical Requirements Before Setup

- Physical access to the G3A to perform configuration and to reboot the unit if required
- A charged internal battery and primary power connection so the device can boot and register on the network
- A valid cellular SIM and active cellular service consistent with the device GSM capabilities
- Access to the official Gosafe configuration method or vendor tool used to edit server and transport settings
- Knowledge of the device identifier or registration information required by your fleet platform
- A plan to test connectivity and to confirm messages arrive at Plaspy after configuration

## How This Tracker Connects to Plaspy

When configured for Plaspy, the G3A sends its position, motion events, and configured I O or alarm messages to the shared Plaspy server endpoint and port. Plaspy receives and decodes the incoming protocol automatically, exposing the device on the platform for monitoring and reporting.

- The tracker transmits data to d.plaspy.com or to 54.85.159.138 on port 8888
- You may choose UDP or TCP transport on the device if it requires a transport selection
- After messages reach Plaspy, the platform detects the tracker protocol and processes the data automatically
- Event and motion reports from the G3A (for example distance or change course triggers) appear in Plaspy for operational visibility
- The shared port and automatic protocol detection simplify support for multiple device models in Plaspy

## Common Configuration Workflow

1. Access the official Gosafe configuration method or software for the G3A as provided by the manufacturer or vendor.
2. In the device server settings enter the Plaspy endpoint as either d.plaspy.com or 54.85.159.138 depending on the configuration interface.
3. Set the port to 8888 as the destination for tracker messages.
4. If the device requires a transport selection choose UDP or TCP on port 8888, then save the transport choice.
5. Apply or save the configuration on the tracker using the manufacturer tool or SMS command method if supported.
6. Restart the device if required by the configuration procedure to begin reporting to the new server settings.
7. Validate that the device reports to Plaspy by confirming the tracker appears in the platform and that recent position or event messages are present.

## Example Configuration Commands

The exact command syntax or configuration screens for the Gosafe G3A can vary by firmware and vendor tool. Because manufacturer tools differ, this guide does not invent device commands. Use the official Gosafe configuration utility or vendor documentation to apply the server settings d.plaspy.com or 54.85.159.138 and port 8888, and choose UDP or TCP if prompted.

If you have a set of manufacturer SMS or console commands provided in your device package, apply the server domain or IP and port exactly as shown above and preserve any required placeholders from those commands.

## Configuration Notes

- Firmware variations can change the exact menu names or SMS command syntax; always confirm the command format for your device firmware revision.
- Choosing TCP or UDP depends on the device firmware and your operational preference; Plaspy supports both transports on port 8888.
- Because Plaspy uses the same port for all supported devices and detects protocol automatically, you generally only need to set the correct server endpoint and port.
- GSM jamming detection and accelerometer event settings are configured on the device itself; consult Gosafe documentation for detailed parameter names.
- Keep a record of any configuration changes and a method to restore previous settings if troubleshooting is required.

## Why Use Plaspy with This Configuration

Configuring the Gosafe G3A to report to Plaspy connects a compact, battery backed tracker with advanced event options to a unified fleet platform. Using Plaspy makes it easier to centralize location visibility, event alerts, and operational monitoring across devices while relying on a shared server endpoint and automatic protocol handling.

To learn more about Plaspy and how it supports multi device deployments visit https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and manufacturer details verify information with Gosafe at https://gosafesystem.com/
