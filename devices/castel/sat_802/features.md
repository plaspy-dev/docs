---
slug: /castel/sat_802/features
id: sat_802-features
sidebar_label: Features
title: Castel - SAT-802 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the Castel SAT-802 GPS tracker and how it works with Plaspy for global asset monitoring
keywords:
  - Castel SAT-802
  - Castel SAT-802 features
  - SAT-802 GPS tracker
  - Castel GPS tracker
  - Iridium SBD GPRS tracker
  - dual module tracker
  - global asset tracking
  - vehicle tracking
  - fleet monitoring Plaspy
  - Plaspy compatible tracker
---

# Castel - SAT-802 Features

This page provides a public, feature-focused overview of the Castel SAT-802 and how its capabilities map to use within Plaspy. It is written to help fleet operators, asset managers, and technical reviewers understand what this tracker can do in practical terms and how Plaspy can present and use that information.

Exact feature availability and behaviour can vary by firmware version, hardware revision, installation method, and the manufacturer's implementation. Always verify device-specific functions, firmware details, and installation requirements with the official manufacturer documentation before deployment.

## Feature Overview

The Castel SAT-802 is a dual-module GPS tracker that combines Iridium SBD satellite messaging with GPRS cellular connectivity to deliver wide area and near global tracking. Its design targets high-value assets and mixed environment fleets where continuous visibility is important, and it includes built-in modes to reduce average power consumption for long deployments.

- Dual communication paths using Iridium SBD and GPRS so assets can report from remote locations and urban areas
- Intelligent channel selection that prioritizes GSM when available and fails over to Iridium for global coverage
- GPS positioning for location reporting and route visibility in Plaspy
- Broad input voltage compatibility for use on a wide range of vehicles and asset types
- Power saving modes to reduce average current draw during standby or low activity periods
- Rugged operating and storage temperature ranges suitable for many field deployments

## Core Features of Castel - SAT-802

- Iridium SBD satellite messaging support for coverage in areas without cellular service
- GPRS cellular communication for lower-latency reporting where GSM is available
- Dual-module architecture with transparent two-way data transmission across channels
- GPS positioning for location fixes and movement tracking
- Intelligent channel selection with GSM prioritized when both networks are available
- Wide operating voltage range of 9V to 36V DC for flexible installation options
- Power saving modes and documented working current ranges for better power management
- Environmental ratings including operating temperature range and IP30 protection level

## How These Features Work with Plaspy

Plaspy receives and normalizes incoming location and status data so teams can maintain continuous awareness of assets that use either satellite or cellular links. The platform treats the SAT-802 as a standard compatible device while exposing the practical outcomes of its dual connectivity and power management features.

- Location points and movement are displayed in Plaspy using GPS fixes submitted by the device
- Plaspy surfaces connectivity status and can reflect whether updates arrived via cellular or satellite where device messages include that context
- Two-way data transmission capability from the SAT-802 enables remote commands or configuration updates as supported by the device and platform
- Power saving behaviour affects reporting cadence and can be reflected in Plaspy as periods of reduced telemetry
- Plaspy automatically detects common tracker protocols to simplify bringing SAT-802 units online

## Typical Use Cases

- Tracking high value mobile assets across mixed coverage areas where satellite fallback is required
- Monitoring fleet vehicles that operate both within cellular coverage and in remote regions
- Long duration deployments where power saving modes extend operational life between maintenance actions
- Mixed fleet operations requiring a single view that includes both satellite and cellular reported assets
- Asset recovery and chain of custody monitoring where global coverage reduces blind spots

## Feature Availability Notes

- Functionality and available telemetry may change between firmware versions and hardware revisions; confirm with the manufacturer for details
- Installation factors such as antenna placement, power wiring, and vehicle integration affect real world performance
- Regional cellular availability and satellite message latency vary by geography and service conditions
- IP30 protection indicates limited ingress protection; evaluate enclosure and mounting for harsh environments
- Power consumption figures and power saving modes will affect reporting intervals and should be tested in your deployment profile

## Why Use Plaspy with These Features

Using Plaspy with the Castel SAT-802 centralizes location and status information from assets that can switch between GPRS and Iridium SBD connectivity. For organizations that need a continuous operational picture, Plaspy helps consolidate mixed connectivity streams into a single interface for monitoring, history review, and operational decision making.

If you want to learn more about how Plaspy can present and manage data from devices like the SAT-802, visit https://www.plaspy.com. For the most current technical specifications, firmware notes, and manufacturer guidance, always consult the official Castel documentation at http://www.castelecom.com/ as features and firmware behaviour can change over time.
