---
slug: /autoseeker/at_9/configuration
id: at_9-configuration
sidebar_label: Configuration
title: Autoseeker - AT-9 Configuration
sidebar_class_name: menu_item_tracker
description: Public AT-9 configuration guide for Plaspy compatibility with server settings and practical setup steps for reliable asset tracking
keywords:
  - Autoseeker AT-9 configuration
  - Autoseeker AT-9 setup
  - Autoseeker AT-9 Plaspy
  - Autoseeker GPS tracker configuration
  - Plaspy tracker setup
  - AT-9 server settings
  - AT-9 tracking software configuration
  - vehicle tracking configuration
  - asset tracker configuration
  - fleet tracking setup
---

# Autoseeker - AT-9 Configuration

This page documents the public configuration context for using the Autoseeker AT-9 with Plaspy. It focuses on the settings and practical steps you will apply on the manufacturer side so the AT-9 can report location and telemetry into the Plaspy platform. Content here is intended for technical users preparing the device for integration with Plaspy and does not replace official manufacturer instructions.

Plaspy uses shared server settings for all supported devices and automatically detects the tracker protocol when data arrives. Exact manufacturer-side steps to configure an AT-9 can vary by firmware version, hardware revision, installation type, and the configuration tool used by your vendor or installer. Use this guide to prepare the AT-9 for communication with Plaspy and verify settings against manufacturer documentation.

## Configuration Overview

Preparing an AT-9 for Plaspy integration means configuring the device to send its location and alarms to the Plaspy endpoint and verifying connectivity. The key public values you will apply are the Plaspy server domain or IP and the platform port. After configuration, you should validate that the device shows up in Plaspy and that expected alarm and telemetry channels are received.

- Enter the Plaspy server endpoint on the AT-9 configuration tool so the tracker sends data to d.plaspy.com or 54.85.159.138 using port 8888.
- Select UDP or TCP transport if the AT-9 configuration interface requires a transport choice; Plaspy accepts both.
- Ensure the device has a working cellular connection and valid SIM so telemetry can reach Plaspy.
- Save and apply the configuration, then confirm the tracker is visible in Plaspy and reporting GPS and alarm events.
- Confirm battery, tamper, SOS, and motion sensors are enabled according to the installation plan so alerts are sent to Plaspy.

## Plaspy Server Settings

Use the following public server settings when configuring the AT-9 for use with Plaspy. These are the official values Plaspy publishes for compatible trackers.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when data arrives

Note that Plaspy uses the same port for all supported devices and handles protocol detection automatically.

## Typical Requirements Before Setup

- A charged AT-9 with a functional 3.7V battery and installation in the intended mounting position.
- A compatible Micro SIM provisioned for data on a supported cellular network, since the AT-9 uses 4G LTE and GSM.
- Access to the official Autoseeker configuration method or software provided by the vendor or manufacturer.
- Basic knowledge of the device firmware version and any vendor-specific configuration commands or SMS formats.
- A test plan to validate location fixes, alarm reporting, and device visibility in Plaspy after configuration.

## How This Tracker Connects to Plaspy

The AT-9 sends GNSS and supplementary location data over cellular networks to the Plaspy collection endpoint. When configured with the Plaspy server settings, the tracker will transmit periodic position updates and event-driven messages such as tamper, motion, or SOS events.

- The device is configured to report to the shared Plaspy server endpoint d.plaspy.com or directly to 54.85.159.138.
- All traffic from the tracker targets port 8888 on the Plaspy endpoint.
- You may choose UDP or TCP on the device if a transport selection is required; Plaspy supports both transports.
- Plaspy receives telemetry and automatically detects the correct tracker protocol so the incoming data is parsed and displayed.
- Once data arrives, Plaspy provides real time visibility, alerts, and historical route playback for the AT-9.

## Common Configuration Workflow

1. Access the official Autoseeker configuration method or software supplied by the vendor or manufacturer; this may be a PC tool, mobile app, or SMS command set.
2. In the device server settings, enter d.plaspy.com or the server IP 54.85.159.138 as the reporting host.
3. Set the device reporting port to 8888 as the destination port.
4. If the AT-9 configuration requires a transport selection, choose UDP or TCP according to installer preference.
5. Apply or save the configuration in the manufacturer tool and confirm settings were uploaded to the device.
6. Restart the AT-9 if required by the manufacturer or tool to activate new network settings.
7. Validate the device reports to Plaspy by checking for incoming telemetry and events on the Plaspy platform.

## Example Configuration Commands

The exact commands or menu fields used to configure an AT-9 depend on Autoseeker firmware and the configuration method supplied by the vendor. In many cases you will enter the Plaspy endpoint and port into a server or APN screen in the manufacturer tool. Example entries you should expect to use in the tool are:

- Host or server field set to d.plaspy.com or 54.85.159.138
- Port field set to 8888
- Transport selection set to UDP or TCP if required by the device

Because manufacturer tools vary, consult the Autoseeker configuration guide or vendor documentation for the precise syntax or SMS commands required to update the server and port on your AT-9.

## Configuration Notes

- Firmware differences may change the configuration screens, SMS command formats, or available transport options; always check the AT-9 firmware release notes when troubleshooting.
- Choosing UDP versus TCP can affect delivery guarantees and overhead; Plaspy supports both and will detect the protocol automatically when data is received.
- Plaspy uses the same port for all supported devices which simplifies multi-device deployments and reduces per-device configuration variance.
- Manufacturer tools sometimes accept either a domain name or an IP address for the server field; use d.plaspy.com or 54.85.159.138 according to what the tool accepts.
- Confirm SIM network data and APN settings via Autoseeker guidance if the device fails to reach the Plaspy server.

## Why Use Plaspy with This Configuration

Using the AT-9 with Plaspy gives organizations reliable remote visibility and alerting for high-value assets. The AT-9’s rugged IP68 enclosure, strong magnetic mount, long battery life, and multi-mode positioning make it well suited to covert or heavy-duty deployments. Configuring the device to report to Plaspy lets teams centralize location, alarm, and telemetry data for operational monitoring and incident response.

Learn more about Plaspy and how it can handle AT-9 telemetry by visiting https://www.plaspy.com. For the most current and device specific configuration methods, firmware details, and manufacturer instructions, verify information on the Autoseeker website https://autoseekergps.com/.
