---
slug: /gotop/g59/configuration
id: g59-configuration
sidebar_label: Configuration
title: GOTOP - G59 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the GOTOP G59 pet tracker showing Plaspy server settings, setup checklist, and practical workflow
keywords:
  - GOTOP G59 configuration
  - GOTOP G59 setup
  - GOTOP G59 Plaspy
  - GOTOP GPS tracker configuration
  - G59 tracking software configuration
  - G59 GPS platform setup
  - Plaspy server settings
  - pet tracker configuration guide
  - GPS collar tag setup
  - G59 integration with Plaspy
---

# GOTOP - G59 Configuration

This page covers the public configuration context for using the GOTOP G59 waterproof pet tracker with Plaspy. It describes the shared Plaspy server settings you will point the G59 at, explains what to check before setup, and outlines a practical workflow to register and verify the device in Plaspy. The content focuses on publicly available integration details and how the tracker reports to Plaspy for real time location, alerts, and activity monitoring.

The G59 is a compact IP67 collar tag that provides Plaspy compatible 4G LTE real-time tracking, SMS location links with Google Maps, and two-way voice interaction. Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so always confirm the device-specific procedure with GOTOP documentation.

## Configuration Overview

Preparing a G59 for use with Plaspy means configuring the device to report its location and status to Plaspy's shared server endpoint and verifying that data flows into your Plaspy account. The goal is to ensure reliable connectivity, accurate reporting, and actionable alerts for pet tracking and monitoring.

- Point the G59 to the Plaspy server endpoint d.plaspy.com or the server IP 54.85.159.138 on the Plaspy port 8888.
- Choose UDP or TCP transport on the device if required; Plaspy accepts either on the same port.
- Validate that the device has an active cellular data connection for 4G LTE reporting or SMS functionality where used.
- Confirm the device appears online in Plaspy and that position updates, geo-fence alerts, and low battery notifications are received.
- Keep firmware and manufacturer configuration tools on hand to adjust settings as needed.

## Plaspy Server Settings

Use the following public server settings when configuring the G59 to communicate with Plaspy:

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP is supported; configure the G59 for either transport if the device requires a selection
- Protocol handling: Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

These values are the public settings Plaspy requires to accept incoming tracker data. Make sure the device points to either the domain or the IP and uses port 8888.

## Typical Requirements Before Setup

- Charged device battery and functional power so the tracker can establish a cellular connection.
- Active SIM card with a data plan and SMS ability where required for 4G LTE reporting and SMS location links.
- Access to GOTOP official configuration method or software for the G59 (manufacturer web tool, app, or SMS commands).
- Reliable cellular coverage in the area where the pet will operate to ensure position updates reach Plaspy.
- Your Plaspy account and device provisioning details ready to validate that the tracker reports correctly.
- Firmware version verification to ensure compatibility with current configuration commands and settings.

## How This Tracker Connects to Plaspy

The G59 sends positional fixes and status messages to the Plaspy platform using its cellular connection. Data reported to Plaspy allows live location, history, and alerts to be presented in the Plaspy interface and delivered as notifications or SMS when configured.

- The tracker reports GPS, BeiDou, Wi‑Fi and LBS derived positions to the shared Plaspy endpoint d.plaspy.com or 54.85.159.138.
- Messages are sent to port 8888; Plaspy accepts either UDP or TCP and automatically identifies the device protocol.
- Geo-fence alerts, low battery notifications, and activity telemetry are forwarded to Plaspy for alerting and history.
- SMS location messages with Google Maps links are supported by the G59 for quick sharing outside the app.
- Remote voice call events and monitoring status can be reflected in Plaspy logs when available.

## Common Configuration Workflow

Follow this practical workflow to configure a G59 for Plaspy:

1. Access the official GOTOP configuration method for the G59 (manufacturer mobile app, web portal, or SMS command set).
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings field.
3. Set the device port to 8888 as the destination port for tracking data.
4. Choose UDP or TCP transport if the G59 requires a transport selection.
5. Verify or configure the SIM APN settings as required by the mobile operator so the device can use 4G LTE data.
6. Apply or save the configuration and follow any manufacturer prompts to commit the change.
7. Restart the device if the manufacturer recommends it or if the device requires a reboot to apply network settings.
8. Validate in Plaspy that the device appears online and is reporting position updates, geo-fence events, and status messages.

## Example Configuration Commands

The G59 manufacturer may provide multiple configuration methods such as a mobile app, web portal, or SMS commands. Exact commands and syntax depend on GOTOP firmware and the configuration channel used. Because commands vary by tool and firmware version, consult GOTOP documentation for device-specific command syntax and examples. Plaspy requires the server d.plaspy.com or 54.85.159.138 and port 8888 to be set on the device; the transport can be UDP or TCP.

## Configuration Notes

- Firmware differences can change command syntax and available options; always check the GOTOP release notes before applying settings.
- TCP and UDP behave differently on cellular networks; choose the transport that matches your installation and validate connectivity in Plaspy.
- Plaspy uses the same port 8888 for all devices and automatically detects the tracker protocol, simplifying server-side routing.
- If SMS configuration is available for initial setup, it can be useful for quick verification in areas with limited data connectivity.
- Confirm APN and carrier settings with your mobile operator if the device cannot establish a data connection.

## Why Use Plaspy with This Configuration

Using the GOTOP G59 with Plaspy gives pet owners and organizations consistent real-time visibility, alerting, and event history across Plaspy dashboards and notifications. The G59's multi-mode positioning and waterproof design help maintain accurate tracking in urban and outdoor environments, while Plaspy centralizes location, geo-fence alerts, and status reporting for easy monitoring.

To learn more about Plaspy and supported device integration, visit https://www.plaspy.com. For the latest G59 device-specific setup steps, firmware details, and manufacturer documentation, verify information with GOTOP at https://www.gotop.cc/.
