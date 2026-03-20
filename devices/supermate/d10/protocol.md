---
slug: /supermate/d10/protocol
id: d10-protocol
sidebar_label: Protocol
title: Supermate - D10 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol information for using the Supermate D10 with Plaspy for device communication and integration
keywords:
  - Supermate D10 protocol
  - Supermate D10 GPS protocol
  - Supermate D10 Plaspy compatibility
  - Supermate D10 communication protocol
  - Supermate D10 tracking protocol
  - Supermate GPS tracker protocol
  - D10 tracker Plaspy
  - vehicle tracking Supermate D10
  - fleet management D10 protocol
  - tracker protocol integration Plaspy
---

# Supermate - D10 Protocol

This page covers the public protocol context for using the Supermate D10 tracker with Plaspy. It explains the role of the tracker reporting protocol in enabling the D10 to send location updates, geo fence alerts, and SOS signals to a remote server without exposing private parser logic or firmware internals. The hardware and feature description of the D10 informs the guidance here but does not replace the device manual.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138. The port is 8888. The device may be configured using UDP or TCP on port 8888. All devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol. Exact protocol behavior can vary by firmware build, hardware revision, and manufacturer implementation, so always confirm device specific details when planning an integration.

## Protocol Overview

The communication protocol for the Supermate D10 defines how the tracker identifies itself, how it transmits position and event data, and how servers like Plaspy receive and interpret those transmissions. This page focuses on public facing aspects of that process and how to ensure the D10 reports successfully to Plaspy.

- Enables the D10 to send periodic location updates and event messages to a remote endpoint for processing.
- Carries identity information so Plaspy can associate each incoming message with the correct device record.
- Delivers geo fence events, SOS alerts, and status reports in a way that Plaspy can surface to users.
- Supports operation over common transports so the D10 can work across cellular networks and standard IP networks.
- Provides the basis for reliable reporting and time ordered telemetry that Plaspy uses for maps, alerts, and history.

## How Plaspy Detects the Protocol

Plaspy receives incoming messages at a single shared endpoint and port and determines the tracker protocol automatically. When a Supermate D10 is configured to report to Plaspy, the platform listens on the shared port and matches incoming traffic to known device behaviors so manual protocol selection is typically unnecessary.

- Plaspy server domain is d.plaspy.com which devices can use as the reporting host.
- Plaspy server IP is 54.85.159.138 which some installers prefer to enter directly.
- The port is 8888 and Plaspy accepts both UDP and TCP traffic on that port.
- All devices in Plaspy use the same port which simplifies device setup and network rules.
- Plaspy automatically detects the tracker protocol so users normally do not need to select a protocol inside the platform if the device points to the Plaspy endpoint.

## Transport and Connection Context

Connection context describes how the D10 establishes a path to the Plaspy servers and what administrators should configure on the tracker and network to allow successful reporting. Transport choice may affect latency and delivery characteristics but does not change the public protocol role.

- The device may be configured using UDP or TCP on port 8888 depending on the D10 firmware and settings.
- Devices can point at d.plaspy.com or 54.85.159.138 as the reporting host when configuring network parameters.
- The port is 8888 for all Plaspy supported devices which simplifies firewall and NAT configuration.
- Use the transport mode recommended by the device manual or your carrier for the best reliability in your environment.
- Confirm that mobile network and firewall policies allow outbound traffic to the Plaspy endpoint and port.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, feature availability, and optional fields that servers observe.
- Hardware revisions or model variants may expose different reporting options or power management behavior.
- Manufacturer side configuration differences can influence whether the device reports over UDP or TCP by default.
- Transport selection matters for delivery semantics and should match what the device and carrier support.
- Always validate a device with a short on network test to confirm it reaches d.plaspy.com or 54.85.159.138 on port 8888.
- When in doubt consult the official Supermate documentation and the device configuration menus for the correct reporting host and transport.

## Why Protocol Understanding Matters

A practical understanding of the tracker communication protocol makes setup and troubleshooting faster and reduces downtime for monitoring and fleet operations. Knowing how and where the D10 reports helps you confirm that Plaspy is receiving the expected data and assists with troubleshooting network and configuration issues.

- Helps ensure the D10 is configured to report to the correct Plaspy endpoint and transport.
- Speeds identification of issues caused by blocked ports, incorrect hostnames, or carrier restrictions.
- Supports accurate mapping of events such as geo fence triggers and SOS signals into Plaspy alerts.
- Improves long term reliability by aligning device settings with network policies and power expectations.
- Makes it simpler to validate device behavior after firmware updates or hardware changes.

## Why Use Plaspy with This Protocol

Using the Supermate D10 with Plaspy gives organizations a straightforward path to real time visibility, alerting, and historical tracking without needing to manage protocol parsing or multiple listening ports. The D10s compact design and feature set such as real time tracking and geo fencing align with Plaspy capabilities for monitoring assets, vehicles, and people.

If you want to learn more about Plaspy and how the platform receives and processes data from devices like the Supermate D10 visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation details can change over time so verify the latest device specific protocol details on the manufacturer website http://www.gps-summit.com/ before deploying at scale.
